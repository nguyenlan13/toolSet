# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lan = User.create(name: "Lan", email: "lan@gmail.com", username: "lan_n", password: "password")
micah = User.create(name: "Micah", email: "micah@gmail.com", username: "micah_s", password: "password")
michael = User.create(name: "Michael", email: "michael@gmail.com", username: "michael_c", password: "password")
juny = User.create(name: "Juny", email: "juny@gmail.com", username: "juny_m", password: "password")
meg = User.create(name: "Meg", email: "meg@gmail.com", username: "meg_g", password: "password")


program = Category.create(name: "Programming")
psych = Category.create(name: "Psychology")
bio = Category.create(name: "Biology")
chem = Category.create(name: "Chemistry")
physics = Category.create(name: "Physics")
sbus = Category.create(name: "Small Business")
econ = Category.create(name: "Economics")


oop = Topic.create(name: "Object Oriented Programming")
rd = Topic.create(name: "Relational Databases")
ror = Topic.create(name: "Ruby on Rails")
a = Topic.create(name: "Algorithms")
ds = Topic.create(name: "Data Structures")
mm = Topic.create(name: "Mental Models")


CategoryTopic.create(category: program, topic: oop)
CategoryTopic.create(category: program, topic: rd)
CategoryTopic.create(category: program, topic: ror)
CategoryTopic.create(category: program, topic: a)
CategoryTopic.create(category: program, topic: ds)
CategoryTopic.create(category: physics, topic: mm)
CategoryTopic.create(category: econ, topic: mm)
CategoryTopic.create(category: psych, topic: mm)
CategoryTopic.create(category: chem, topic: mm)


pa = Lesson.create(user: lan, topic: rd, description: "Polymorphic Associations in a Rails Application")
bigo = Lesson.create(user: lan, topic: a, description: "What is Big-O Notation?")
is = Lesson.create(user: lan, topic: a, description: "Insertion Sort")
fp = Lesson.create(user: lan, topic: mm, description: "What are First Principles?")
sandd = Lesson.create(user: lan, topic: mm, description: "Supply and Demand")
inversion = Lesson.create(user: lan, topic: mm, description: "Thinking Skill: Inversion")
cm = Lesson.create(user: lan, topic: mm, description: "Critical Mass")
tr = Lesson.create(user: lan, topic: mm, description: "Theory of Relativity")
anchor = Lesson.create(user: lan, topic: mm, description: "Cognitive Biases: Anchoring")

pa1 = Attempt.create(lesson: pa, attempt_number: 1, content:"blah blah blah")
pa2 = Attempt.create(lesson: pa, attempt_number: 2, content:"A model can belong to more than one model on a single association")

Comment.create(user: micah, content: "Incorrect!", commentable: pa1)
Comment.create(user: micah, content: "That's correct!", commentable: pa2)