class Lesson < ApplicationRecord
    belongs_to :topic
    belongs_to :user
    has_many :attempts

end
