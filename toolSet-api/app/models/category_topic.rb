class CategoryTopic < ApplicationRecord
    belongs_to :category
    belongs_to :topic

end
