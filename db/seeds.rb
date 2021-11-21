# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Store.destroy_all
# Topic.destroy_all don;t need this because dependent: :destroy in model

vs = Store.create(name: "Victoria's Secret")
fl = Store.create(name: "Foot Locker")
bb = Store.create(name: "Bath and Body Works")
ae = Store.create(name: "American Eagle")

sb = vs.items.create(name: "Super Bra", price: 50, description: "Lots of support")
rb = vs.items.create(name: "Regular Bra", price: 20, description: "Wear it with a tshirt")

# could also create with our item model (need store_id)
# fl.items.create(name:'Nike', price: 99, description: 'just do it')
nk = Item.create(name:'Nike', price: 99, description: 'just do it', store_id: fl.id)
ad = Item.create(name:'Adidas', price: 80, description: 'super stylish shoe for running', store_id: fl.id)

bw = bb.items.create(name: "Body Wash", price: 12, description: "Clean yo-self")
bs = bb.items.create(name: "Body Spray", price: 15, description: "Smell better")

sj = ae.items.create(name: "Skinny Jeans", price: 42, description: "Skinny all the way")
bj = ae.items.create(name: "Boyfriend Jeans", price: 45, description: "A little baggy but stylish")


10.times do
  author = Faker::Name.name
  body = Faker::Quote.robin
  sb.comments.create(author: "#{author}", body: "#{body}")
  rb.comments.create(author: "#{author}", body: "#{body}")
  nk.comments.create(author: "#{author}", body: "#{body}")
  ad.comments.create(author: "#{author}", body: "#{body}")
  Comment.create(author: "#{author}", body: "#{body}", item_id: bw.id)
  Comment.create(author: "#{author}", body: "#{body}", item_id: bs.id)
  Comment.create(author: "#{author}", body: "#{body}", item_id: sj.id)
  Comment.create(author: "#{author}", body: "#{body}", item_id: bj.id)
end

