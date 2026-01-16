CREATE DATABASE RESTAURANT_BACKEND
-- SQL Server schema for restaurant_orders
-- Converted from MySQL dump

------------------------------------------------------------
-- Table: restaurants
------------------------------------------------------------
CREATE TABLE restaurants (
    RestaurantID INT IDENTITY(1,1) PRIMARY KEY,
    RestaurantName NVARCHAR(200) NULL
);

------------------------------------------------------------
-- Table: menu_categories
------------------------------------------------------------
CREATE TABLE menu_categories (
    MenuCategoryID INT IDENTITY(1,1) PRIMARY KEY,
    MenuCategoryName NVARCHAR(45) NULL,
    MenuCategoryImagePath NVARCHAR(300) NULL,
    RestaurantID INT NULL,
    CONSTRAINT FK_MenuCategories_Restaurants FOREIGN KEY (RestaurantID)
        REFERENCES restaurants(RestaurantID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

------------------------------------------------------------
-- Table: menu_items
------------------------------------------------------------
CREATE TABLE menu_items (
    MenuItemID INT IDENTITY(1,1) PRIMARY KEY,
    MenuItemName NVARCHAR(100) NULL,
    MenuItemImagePath NVARCHAR(300) NULL,
    MenuItemPrice DECIMAL(10,2) NULL,
    MenuCategoryID INT NULL,
    CONSTRAINT FK_MenuItems_Categories FOREIGN KEY (MenuCategoryID)
        REFERENCES menu_categories(MenuCategoryID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

------------------------------------------------------------
-- Table: tables
------------------------------------------------------------
CREATE TABLE tables (
    TableID INT IDENTITY(1,1) PRIMARY KEY,
    TableNumber INT NOT NULL UNIQUE,
    TableCapacity INT NULL,
    TableStatus VARCHAR(10) CHECK (TableStatus IN ('free','occupied')) DEFAULT 'free',
    RestaurantID INT NULL,
    CONSTRAINT FK_Tables_Restaurants FOREIGN KEY (RestaurantID)
        REFERENCES restaurants(RestaurantID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

------------------------------------------------------------
-- Table: orders
------------------------------------------------------------
CREATE TABLE orders (
    OrderID INT IDENTITY(1,1) PRIMARY KEY,
    TableID INT NULL,
    TotalAmount DECIMAL(10,2) NULL,
    OrderStatus VARCHAR(10) CHECK (OrderStatus IN ('pending','preparing','served','paid')) DEFAULT 'pending',
    CreatedAt DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Orders_Tables FOREIGN KEY (TableID)
        REFERENCES tables(TableID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

------------------------------------------------------------
-- Table: order_items
------------------------------------------------------------
CREATE TABLE order_items (
    OrderItemID INT IDENTITY(1,1) PRIMARY KEY,
    OrderID INT NULL,
    MenuItemID INT NULL,
    Quantity INT NULL,
    SubTotal DECIMAL(10,2) NULL,
    CONSTRAINT FK_OrderItems_Orders FOREIGN KEY (OrderID)
        REFERENCES orders(OrderID)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT FK_OrderItems_MenuItems FOREIGN KEY (MenuItemID)
        REFERENCES menu_items(MenuItemID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

------------------------------------------------------------
-- Table: users
------------------------------------------------------------
CREATE TABLE users (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    UserName NVARCHAR(45) NULL,
    Password NVARCHAR(400) NULL,
    UserRole VARCHAR(10) CHECK (UserRole IN ('waiter','manager','cashier','chef')),
    RestaurantID INT NOT NULL,
    CONSTRAINT FK_Users_Restaurants FOREIGN KEY (RestaurantID)
        REFERENCES restaurants(RestaurantID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);
