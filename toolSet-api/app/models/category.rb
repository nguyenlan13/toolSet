class Category < ApplicationRecord
    has_many :category_topics
    has_many :topics, through: :category_topics

end
