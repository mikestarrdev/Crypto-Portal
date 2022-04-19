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

User.create(
    username: "mike",
    password: "password",
    email: "mike@cryptoportal.com"
)

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
    title: "DeFi kingdoms moving to AVAX",
    body: "I know it's old news already, but who else is still excited on this?",
    user: User.all.sample,
    forum: Forum.find_by(title: "Avalanche")
)


Post.create(
    title: "Sir, wen moon?",
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

puts "seeding first post comments..."
# title: "BTC vs ETH?"
Comment.create(
    content: "eth if eth2.0 ever ships... Otherwise it's btc for me",
    user: User.all.sample,
    post: Post.first
)

Comment.create(
    content: "BTC is and always will be king",
    user: User.all.sample,
    post: Post.first
)

Comment.create(
    content: "ETH has more utility. More advanced smart contracts. It has a growing community too",
    user: User.all.sample,
    post: Post.first
)

Comment.create(
    content: "ETH is Money, BTC is money. It's a draw for me",
    user: User.all.sample,
    post: Post.first
)

puts "seeding 2nd post comments..."
# title: "BTC price predictions?"
Comment.create(
    content: "BTC $100k",
    user: User.all.sample,
    post: Post.second
)

Comment.create(
    content: "Both going to zero",
    user: User.all.sample,
    post: Post.second
)

Comment.create(
    content: "Eth 10k, btc 60k by end of 2022",
    user: User.all.sample,
    post: Post.second
)

puts "seeding 3rd post comments..."
# title: "ETH price predictions?",
Comment.create(
    content: "$4k",
    user: User.all.sample,
    post: Post.third
)

Comment.create(
    content: "$8k",
    user: User.all.sample,
    post: Post.third
)


puts "seeding 4th post comments..."
# title: "Bullish on the merge?",
Comment.create(
    content: "Absolutely. It's going to be yuge",
    user: User.all.sample,
    post: Post.fourth
)

Comment.create(
    content: "Couldn't care less about ETH. No",
    user: User.all.sample,
    post: Post.fourth
)

Comment.create(
    content: "Most bullish news all year",
    user: User.all.sample,
    post: Post.fourth
)

puts "seeding 4th post comments..."
# title: "Any solidity devs in here?",
Comment.create(
    content: "Solidity newb, coming fresh off a bootcamp! Let's connect",
    user: User.all.sample,
    post: Post.fifth
)

Comment.create(
    content: "Rust dev. Solidity is cool though",
    user: User.all.sample,
    post: Post.fifth
)

Comment.create(
    content: "Solidity + React = moolah",
    user: User.all.sample,
    post: Post.fifth
)

puts "seeding last post comments..."
# title: "Do Kwon buying billions in BTC?",
Comment.create(
    content: "BOOOOOOLISH",
    user: User.all.sample,
    post: Post.last
)

Comment.create(
    content: "Long time invester in Terra. Love the ecosystem and what Do has done",
    user: User.all.sample,
    post: Post.last
)

