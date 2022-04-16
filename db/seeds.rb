Forum.destroy_all
Post.destroy_all
User.destroy_all
Comment.destroy_all
Reputation.destroy_all
Favorite.destroy_all

puts "seeding Forum..."

Forum.create(title: "Bitcoin")
Forum.create(title: "Ethereum")
Forum.create(title: "Avalanche")
Forum.create(title: "Dogecoin")
Forum.create(title: "Solana")
Forum.create(title: "Terra-Luna")

puts "seeding User..."
20.times do
    User.create(
        username: Faker::Twitter.screen_name,
        password: "password",
        email: Faker::Internet.email,
        btc_address: Faker::Blockchain::Bitcoin.address,
        eth_address: Faker::Blockchain::Ethereum.address
    )
end

puts "seeding posts..."
Post.create(
    title: "BTC vs ETH?"
    body: "Which are you more bullish on? I think BTC is the king"
    user: User.all.sample,
    forum: Forum.all.sample
)

puts "seeding comments..."
Comment.create(
    content: "BTC $100k",
    user: User.all.sample,
    post: Post.all.sample
)