class Topic < ApplicationRecord
    has_many :category_topics
    has_many :categories, through: :category_topics
    has_many :lessons
    has_many :users, through: :lessons

end
