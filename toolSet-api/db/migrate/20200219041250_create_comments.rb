class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
        t.integer :user_id
        t.string :content
        t.references :commentable, polymorphic: true, index: true
        t.timestamps
    end
  end
end
