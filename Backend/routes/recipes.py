from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Optional
from database import get_db
from models import Recipe, User
from pydantic import BaseModel
from routes.auth import get_current_user

router = APIRouter()

# --- Pydantic Models ---
class RecipeBase(BaseModel):
    title: str
    description: str
    ingredients: str
    instructions: str
    prep_time: int
    cook_time: int
    difficulty: str
    servings: int
    image_url: Optional[str] = None
    category_id: int

class RecipeCreate(RecipeBase):
    pass

class RecipeResponse(RecipeBase):
    id: int
    author_id: int
    is_approved: bool

    class Config:
        orm_mode = True

# --- Routes ---

@router.get("/", response_model=List[RecipeResponse])
def get_recipes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    recipes = db.query(Recipe).filter(Recipe.is_approved == True).offset(skip).limit(limit).all()
    return recipes

@router.get("/{recipe_id}", response_model=RecipeResponse)
def get_recipe(recipe_id: int, db: Session = Depends(get_db)):
    recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not recipe:
        raise HTTPException(status_code=404, detail="Receta no encontrada")
    return recipe

@router.post("/", response_model=RecipeResponse, status_code=status.HTTP_201_CREATED)
def create_recipe(recipe: RecipeCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_recipe = Recipe(**recipe.dict(), author_id=current_user.id)
    db.add(new_recipe)
    db.commit()
    db.refresh(new_recipe)
    return new_recipe

@router.delete("/{recipe_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_recipe(recipe_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not recipe:
        raise HTTPException(status_code=404, detail="Receta no encontrada")
    
    if recipe.author_id != current_user.id and not current_user.is_admin:
        raise HTTPException(status_code=403, detail="No tienes permiso para eliminar esta receta")
        
    db.delete(recipe)
    db.commit()
