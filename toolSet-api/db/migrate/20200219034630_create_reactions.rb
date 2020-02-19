class CreateReactions < ActiveRecord::Migration[6.0]
  def change
    create_table :reactions do |t|
        t.integer :user_id
        t.references :reactable, polymorphic: true, index: true
        t.integer :reaction_type
        t.timestamps
    end
  end
end
