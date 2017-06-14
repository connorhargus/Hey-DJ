class CreatePlays < ActiveRecord::Migration[5.1]
  def change
    create_table :plays do |t|
      t.string :author
      t.integer :song_id
      t.boolean :played
      t.timestamps
    end
  end
end
