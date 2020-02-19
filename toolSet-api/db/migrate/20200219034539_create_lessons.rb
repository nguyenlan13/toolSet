class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
        t.integer :user_id
        t.integer :topic_id
        t.text :description
        t.timestamps
    end
  end
end
