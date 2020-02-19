class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
        t.string :google_token
        t.string :google_refresh_token
        t.string :name
        t.string :email
        t.string :username
        t.string :password_digest
      t.timestamps
    end
  end
end
