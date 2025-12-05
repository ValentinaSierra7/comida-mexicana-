from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Recipe, User, Review
from schemas import Recipe as RecipeSchema
from auth import get_current_admin_user

router = APIRouter(prefix="/admin", tags=["admin"])

@router.get("/pending-recipes", response_model=List[RecipeSchema])
def get_pending_recipes(db: Session = Depends(get_db), current_user = Depends(get_current_admin_user)):
    recipes = db.query(Recipe).filter(Recipe.is_approved == False).all()
    return recipes

@router.put("/recipes/{recipe_id}/approve")
def approve_recipe(recipe_id: int, db: Session = Depends(get_db), current_user = Depends(get_current_admin_user)):
    recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")

    recipe.is_approved = True
    db.commit()
    return {"message": "Recipe approved successfully"}

@router.put("/recipes/{recipe_id}/reject")
def reject_recipe(recipe_id: int, db: Session = Depends(get_db), current_user = Depends(get_current_admin_user)):
    recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")

    db.delete(recipe)
    db.commit()
    return {"message": "Recipe rejected and deleted"}

@router.get("/stats")
def get_admin_stats(db: Session = Depends(get_db), current_user = Depends(get_current_admin_user)):
    total_users = db.query(User).count()
    total_recipes = db.query(Recipe).count()
    approved_recipes = db.query(Recipe).filter(Recipe.is_approved == True).count()
    pending_recipes = db.query(Recipe).filter(Recipe.is_approved == False).count()
    total_reviews = db.query(Review).count()

    return {
        "total_users": total_users,
        "total_recipes": total_recipes,
        "approved_recipes": approved_recipes,
        "pending_recipes": pending_recipes,
        "total_reviews": total_reviews
    }

@router.get("/users/{user_id}/recipes", response_model=List[RecipeSchema])
def get_user_recipes(user_id: int, db: Session = Depends(get_db), current_user = Depends(get_current_admin_user)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    recipes = db.query(Recipe).filter(Recipe.author_id == user_id).all()
    return recipes
