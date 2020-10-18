class CreateBuckets < ActiveRecord::Migration[6.0]
  def change
    create_table :buckets do |t|
      t.string :filename
      t.integer :size

      t.timestamps
    end
  end
end
