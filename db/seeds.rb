# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Store.destroy_all
# Topic.destroy_all don;t need this because dependent: :destroy in model

vs = Store.create(name: "Victoria's Secret")
fl = Store.create(name: "Foot Locker")
bb = Store.create(name: "Bath and Body Works")
ae = Store.create(name: "American Eagle")

vs.items.create(name: "Super Bra", price: 50, description: "Lots of support")
vs.items.create(name: "Regular Bra", price: 20, description: "Wear it with a tshirt")

# could also create with our item model (need store_id)
# fl.items.create(name:'Nike', price: 99, description: 'just do it')
Item.create(name:'Nike', price: 99, description: 'just do it', store_id: fl.id)
Item.create(name:'Adidas', price: 80, description: 'super stylish shoe for running', store_id: fl.id)

bb.items.create(name: "Body Wash", price: 12, description: "Clean yo-self")
bb.items.create(name: "Body Spray", price: 15, description: "Smell better")

ae.items.create(name: "Skinny Jeans", price: 42, description: "Skinny all the way")
ae.items.create(name: "Boyfriend Jeans", price: 45, description: "A little baggy but stylish")