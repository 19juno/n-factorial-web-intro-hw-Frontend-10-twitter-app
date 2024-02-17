import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../images";
import Tweet from "./Tweet";

export default function TweetsList() {
  const tweets = [
    {
      authorName: "Free KZ today",
      authorUserName: "@kz",
      img: KZ_IMG_PATH,
      content:
        "UPDATE: Raiymbek says he has  considered becoming president of Republic of Kazakhstan",
      retweets: 10000,
      replies: 500,
      likes: 100000000,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "UPDATE: Rayimbek became CEO of Google",
      retweets: 132262000,
      replies: 548465500,
      likes: 55875456000000,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "UPDATE: Rayimbek became CEO of Google",
      retweets: 132262000,
      replies: 548465500,
      likes: 55875456000000,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content:
        "UPDATE: Rayimbek and Olzhas co-founded their company and named it RayOl-X",
      retweets: 132262000,
      replies: 548465500,
      likes: 55875456000000,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content:
        "UPDATE: Rayimbek was awarded the Nobel Prize in Computer Science 2024",
      retweets: 132262000,
      replies: 548465500,
      likes: 55875456000000,
    },
    {
      authorName: "nFactorial",
      authorUserName: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content:
        "UPDATE: Rayimbek tweets: Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния ",
      retweets: 6846545,
      replies: 5785,
      likes: 4887522,
    },
  ];
  return tweets.map((tweet, index) => <Tweet {...tweet} key={index} />);
}
