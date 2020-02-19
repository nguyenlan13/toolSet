class Attempt < ApplicationRecord
    belongs_to :lesson
    has_many :comments, as: :commentable, dependent: :destroy
    has_many :reactions, as: :reactable, dependent: :destroy
    

end
