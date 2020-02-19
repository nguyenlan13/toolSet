class CreateCategoryTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :category_topics do |t|
        t.integer :category_id
        t.integer :topic_id
        t.timestamps
    end
  end
end
