from database import SessionLocal, engine, Base
from models import Category, User
from auth import get_password_hash

def init_db():
    # Create tables
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        # Create categories
        categories = [
            {"name": "Tacos", "description": "Deliciosos tacos tradicionales"},
            {"name": "Enchiladas", "description": "Enchiladas con diferentes salsas"},
            {"name": "Sopas", "description": "Sopas tradicionales mexicanas"},
            {"name": "Postres", "description": "Dulces y postres típicos"},
            {"name": "Salsas", "description": "Salsas para acompañar tus platillos"},
            {"name": "Bebidas", "description": "Bebidas tradicionales y modernas"}
        ]

        for cat_data in categories:
            category = db.query(Category).filter(Category.name == cat_data["name"]).first()
            if not category:
                category = Category(**cat_data)
                db.add(category)

        # Create admin user
        admin = db.query(User).filter(User.username == "admin").first()
        if not admin:
            admin = User(
                username="admin",
                email="admin@sabordemexico.com",
                hashed_password=get_password_hash("admin123"),
                full_name="Administrador",
                is_admin=True
            )
            db.add(admin)

        db.commit()
        print("Database initialized successfully!")

    except Exception as e:
        print(f"Error initializing database: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
