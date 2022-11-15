# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


users = User.create([
    {name: "John", email: "john@gmail.com" , password: "123456" , password_confirmation: "123456"},
    {name: "Jane", email: "jane@gmail.com" , password: "123456" , password_confirmation: "123456"}

])
    

books = Book.create([
    {name: "The Great Gatsby"},
    {name: "The Catcher in the Rye"},
    {name: "The Grapes of Wrath"},
])  


reviews = Review.create([
    {user_id: 1, book_id: 1, score: 5, description: "This book is amazing!"},
    {user_id: 1, book_id: 2, score: 4, description: "This book is good!"},
    {user_id: 1, book_id: 3, score: 3, description: "This book is ok!"},
    {user_id: 2, book_id: 1, score: 4, description: "This book is good!"},


])