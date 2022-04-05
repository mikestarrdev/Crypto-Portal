Post.destroy_all
User.destroy_all
Comment.destroy_all
Reputation.destroy_all
Favorite.destroy_all

puts "seeding User... 🕺🏻"
20.times do
    User.create(
        username: Faker::Twitter.screen_name,
        password: "password",
        email: Faker::Internet.email,
        avatar_url: Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg"),
        btc_address: Faker::Blockchain::Bitcoin.address,
        eth_address: Faker::Blockchain::Ethereum.address
    )
end

puts "seeding posts... ✍🏻"
30.times do
    Post.create(
        title: Faker::Quote.robin,
        body: Faker::Quote.matz,
        user: User.all.sample
    )
end

puts "seeding comments... 💬"
20.times do
    Comment.create(
        content: Faker::Quote.singular_siegler,
        user: User.all.sample,
        post: Post.all.sample
    )
end


puts "seeding favorites... ⭐️"
20.times do
    Favorite.create(
        token: "BTC",
        user: User.all.sample
    )
end

puts "seeding reputation... 👍🏻"
20.times do
    Reputation.create(user: User.all.sample)
end