# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#create some issues

puts "Seeding database ....."

# Issue.create(title: 'Close issue not working' , description:'Lorem ipsum lorem ipsum lorem ipsum', summary: 'Lorem ipsum lorem ipsum lorem ipsum', issue_steps: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum, lorem ipsum',assigned_to: 2, project_id: 1, user_identified: 1)
# Issue.create(title: 'Showing only few recipes', description: 'Lorem ipsum lorem ipsum lorem ipsum', summary: 'Lorem ipsum lorem ipsum lorem ipsum', issue_steps: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum, lorem ipsum',assigned_to: 3, project_id: 2, user_identified: 2)
# Issue.create(title: 'Vehicle not showing charge percentage', description: 'Lorem ipsum lorem ipsum lorem ipsum', summary: 'Lorem ipsum lorem ipsum lorem ipsum', issue_steps: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum, lorem ipsum',assigned_to: 2, project_id: 3, user_identified: 3)
# Issue.create(title: 'System hanging because of bots', description: 'Lorem ipsum lorem ipsum lorem ipsum', summary: 'Lorem ipsum lorem ipsum lorem ipsum', issue_steps: 'lorem ipsum, lorem ipsum lorem ipsum lorem ipsum, lorem ipsum',assigned_to: 1, project_id: 2, user_identified: 2)


ProjectUser.create(user_id: 1, project_id: 2)
ProjectUser.create(user_id: 3, project_id: 1)
ProjectUser.create(user_id: 2, project_id: 3)
ProjectUser.create(user_id: 2, project_id: 1)

puts "Done seeding!!"