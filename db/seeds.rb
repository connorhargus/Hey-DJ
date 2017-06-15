# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

thugger = Song.create(title: "Wyclef Jean", artist: "Young Thug", url: "<iframe width=\"100%\" height=\"250\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/279487716&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>")
kamaiyah = Song.create(title: "How Does It Feel", artist: "Kamaiyah", url: "<iframe width=\"100%\" height=\"250\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265566579&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>")
chance = Song.create(title: "They Say", artist: "Chance the Rapper", url: "<iframe width=\"100%\" height=\"250\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322628230&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>")
trane = Song.create(title: "Naima", artist: "John Coltrane", url: "<iframe width=\"100%\" height=\"250\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231878076&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>")

thugPlay = Play.create(author: "Alice", played: false, song_id: thugger.id)
kamaiyahPlay = Play.create(author: "Joe", played: false, song_id: kamaiyah.id)
chancePlay = Play.create(author: "Katy", played: false, song_id: chance.id)
tranePlay = Play.create(author: "George", played: false, song_id: trane.id)

5.times {
	Vote.create(play_id: trane.id)
}

4.times {
	Vote.create(play_id: thugPlay.id)
}

6.times {
	Vote.create(play_id: kamaiyahPlay.id)
}

9.times {
	Vote.create(play_id: chancePlay.id)
}