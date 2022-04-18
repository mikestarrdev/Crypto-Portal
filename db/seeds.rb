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
    title: "BTC vs ETH?",
    body: "Which are you more bullish on? I think BTC is the king",
    user: User.all.sample,
    forum: Forum.find_by(title: "Bitcoin")
)

Post.create(
    title: "BTC price predictions?",
    body: "Y'all think $100,000 is feasible in 2022?",
    user: User.all.sample,
    forum: Forum.find_by(title: "Bitcoin")
)

Post.create(
    title: "ETH price predictions?",
    body: "$10k by 2023, 100%",
    user: User.all.sample,
    forum: Forum.find_by(title: "Ethereum")
)

Post.create(
    title: "Bullish on the merge?",
    body: "Personally I cannot wait until ETH 2.0 gets released, but when is it going to happen?",
    user: User.all.sample,
    forum: Forum.find_by(title: "Ethereum")
)

Post.create(
    title: "Any solidity devs in here?",
    body: "Been learning Solidity for a few months now. I want to work for a DAO",
    user: User.all.sample,
    forum: Forum.find_by(title: "Ethereum")
)

Post.create(
    title: "Favorite DAO",
    body: "Which DAO do you think is the best to work for? Maker DAO? Yearn?",
    user: User.all.sample,
    forum: Forum.find_by(title: "Ethereum")
)

Post.create(
    title: "BTC vs ETH?",
    body: "Which are you more bullish on? I think BTC is the king",
    user: User.all.sample,
    forum: Forum.find_by(title: "Avalanche")
)

Post.create(
    title: "BTC vs ETH?",
    body: "Which are you more bullish on? I think BTC is the king",
    user: User.all.sample,
    forum: Forum.find_by(title: "Avalanche")
)

Post.create(
    title: "Wen mewn?",
    body: "DOGE so cute",
    user: User.all.sample,
    forum: Forum.find_by(title: "Dogecoin")
)

Post.create(
    title: "Moon",
    body: "Ser wen moon?",
    user: User.all.sample,
    forum: Forum.find_by(title: "Dogecoin")
)

Post.create(
    title: "Favorite project on Terra eco",
    body: "Astroport and Mars protocol. Anchor is great too. So simple to use",
    user: User.all.sample,
    forum: Forum.find_by(title: "Terra-Luna")
)

Post.create(
    title: "Do Kwon buying billions in BTC?",
    body: "Makes me bullish",
    user: User.all.sample,
    forum: Forum.find_by(title: "Terra-Luna")
)

puts "seeding comments..."
Comment.create(
    content: "BTC $100k",
    user: User.all.sample,
    post: Post.all.sample
)