# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ladies_images = [
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683155/233H_r6crs9.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479629029/pexels-photo-47554_iew8nm.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479629057/pexels-photo-157023_b3yspb.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479629163/pexels-photo-25845_tei8jg.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479684190/headshot_t0iwu7.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683267/maurice_mf7el6.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683428/images_vcjjmm.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683365/ErinLeeper_BryanWhitely.jpg.300x1200_q90_upscale_me5aes.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683505/cute-girl-picture-019_rbngnf.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/e_auto_contrast/v1479683580/Desktop-cute-girl-images_vatgja.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683607/girl-hair-hair-color-hair-dye-Favim.com-2909358_yn6rbq.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683713/6912247-cute-girl-backgrounds_axpnjv.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683769/1441536938_MC_-_Headshot_1_wnl3nd.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479625386/Cute-Girl-In-HQ-Pict-For-Background-5I0-768x480_y8anjp.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683850/cute-girl-grey-hair-makeup-Favim.com-3873602_fksh3o.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683905/24413490902_06bd3d7044_h_ljsito.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683935/680b168275862e47f05c04a36fd934d2_deandp.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683976/Beautiful_woman_of_Mahhabalipuram_India_qbhqbs.jpg"
]

gents_images = [
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479628986/pexels-photo-119705_colg8l.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479629103/man-crazy-funny-dude-45882_y5zwbi.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683336/1679ed2d901f5c09f903a89d0e0e30ab_m7ao6g.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683297/fstoppers_the_project_dani_diamond_6-710x474_zcqbtd.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479669016/hipster-hs-srgb_oi24uk.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683645/images_1_s4mdig.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683477/GH-headshot-garrett-hedlund-18588690-570-411_z82db4.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683394/ginger_hipster_headshot_nx1yu8.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683537/enhanced-24294-1409424852-12_ksrq9w.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683677/cc5114436b0e405d8991d86b0f6f5c7d_ernysm.jpg",
  "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479683741/tumblr_nyndyeAryQ1r4r1hio1_1280_fhera7.jpg"
]

ladies_names = %w(Emma Sophia Ava Isabella Mia Abigail Emily Charlotte Janette Emily Evelyn Alice Liv Lauren Dianne Carol Grace Jane Katie Lisa Michelle)
gents_names = %w(Liam Mason Jacob William Ethan James Alex Michael Ben Matt Aiden Luke Daniel Carter Jack Gabe Winston)

statuses = [0, 1, 1, 1]

User.create(username: "demo-login",
  email: "my-demo-acct@protonmail.com",
  first_name: "Louie",
  last_name: "Loschiavo",
  password: "password123",
  image_url: "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479628877/handsome-man-938x535_kdwujt.jpg")

18.times do |num|
  first_name = ladies_names[num]
  last_name = Faker::Name.last_name
  User.create(username: Faker::Internet.user_name("#{first_name} #{last_name}", %w(. _ -)),
              first_name: first_name,
              last_name: last_name,
              email: Faker::Internet.email,
              password: "pasword123",
              image_url: ladies_images[num])
  Friendship.create(user_one_id: 1,
                    user_two_id: 2 + num,
                    status: statuses.sample,
                    action_user_id: 2 + num)
end

11.times do |num|
  first_name = gents_names[num]
  last_name = Faker::Name.last_name
  User.create(username: Faker::Internet.user_name("#{first_name} #{last_name}", %w(. _ -)),
              first_name: first_name,
              last_name: last_name,
              email: Faker::Internet.email,
              password: "pasword123",
              image_url: gents_images[num])
  Friendship.create(user_one_id: 1,
                    user_two_id: 20 + num,
                    status: statuses.sample,
                    action_user_id: 20 + num)
end

Wishlist.create(wisher_id: 2, title: "Christmas 2016", event_date: Date.parse("25-12-2016"), description: "Xmas in Jackson Hole! Can't wait.", image_url: 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_727/v1478937138/pexels-photo_gh95it.jpg')
Wishlist.create(wisher_id: 3, title: "Our Anniversary", event_date: Faker::Time.between(14.days.from_now, 90.days.from_now, :all), description: "Our fifth anniversary! XOXO", image_url: 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,h_516,w_790/v1478979668/wedding_qrnpoj.jpg')
Wishlist.create(wisher_id: 3, title: "Valentine's Day", event_date: Date.parse("14-2-2017"), description: "Don't forget like last year! :)", image_url: 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_809/v1478981685/grad3_hddl9e.jpg')
Wishlist.create(wisher_id: 4, title: "It's a girl!!", event_date: Faker::Time.between(14.days.from_now, 90.days.from_now, :all), description: "Anna's Baby Shower", image_url: 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_724/v1479685601/cute_baby_hat_cap-7680x4320_gr6drt.jpg')
Wishlist.create(wisher_id: 5, title: "Jason's Graduation", event_date: Faker::Time.between(14.days.from_now, 90.days.from_now, :all), description: "Celebrate Jason's graduation from U Chicago", image_url: 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_809/v1478981685/grad3_hddl9e.jpg')
Wishlist.create(wisher_id: 6, title: "Xmas 2016", event_date: Faker::Time.between(14.days.from_now, 90.days.from_now, :all), description: "To better gifts this year!", image_url: 'http://res.cloudinary.com/dkpumd3gf/image/upload/c_scale,w_712/v1478937069/christmas-santa-claus-fig-decoration_d7ouej.jpg')
Wishlist.create(wisher_id: 7, title: "Louie's Sixth Birthday", event_date: Faker::Time.between(14.days.from_now, 90.days.from_now, :all), description: "That's 44 in dog years", image_url: "http://res.cloudinary.com/dkpumd3gf/image/upload/v1479622175/yorkie-puppy-sale-2-570x340_uhynjt.jpg")
