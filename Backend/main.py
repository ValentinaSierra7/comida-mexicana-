from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router
from routes.recipes import router as recipes_router
from routes.categories import router as categories_router
from routes.admin import router as admin_router
from routes.users import router as users_router

app = FastAPI(title="Sabor de México API")

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especificar dominios
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(recipes_router, prefix="/recipes", tags=["recipes"])
app.include_router(categories_router, prefix="/categories", tags=["categories"])
app.include_router(admin_router, prefix="/admin", tags=["admin"])
app.include_router(users_router, prefix="/users", tags=["users"])

@app.get("/")
def read_root():
    return {"message": "Bienvenido a la API de Sabor de México"}
