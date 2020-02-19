class CreateAttempts < ActiveRecord::Migration[6.0]
  def change
    create_table :attempts do |t|
        t.integer :lesson_id
        t.integer :attempt_number
        t.text :content
        t.binary :diagram
        t.timestamps
    end
  end
end
