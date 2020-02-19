class User < ApplicationRecord
    has_many :lessons
    has_many :topics, through: :lessons
    has_many :comments
    has_many :reactions

end
