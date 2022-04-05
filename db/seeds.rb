Comment.destroy_all
Forum.destroy_all
Like.destroy_all
Post.destroy_all
User.destroy_all


puts "seeding forum... 🪴"
Forum.create()

puts "seeding User... 🕺🏻"
20.times do
    User.create(
        username: Faker::Name.name,
        password: Faker::String.random(length: 8),
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
        forum: Forum.first.id
    )
end

puts "seeding comments... 💬"
20.times do
    Comment.create(
        content: Faker::Quote.singular_siegler,
        user: User.all.sample.id,
        post: Post.all.sample.id
    )
end

puts "seeding likes...👍🏻 🪴"
15.times do
    Like.create(
        user: User.all.sample.id,
        post: Post.all.sample.id
    )
end