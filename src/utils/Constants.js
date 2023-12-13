import HomeIcon from "../assets/home.svg"
import ShortsIcon from "../assets/shorts.svg"
import FeedbackIcon from "../assets/feedback.svg"
import SettingsIcon from "../assets/settings.svg"
import HelpIcon from "../assets/help.svg"
import ShowMoreIcon from "../assets/showmore.svg"
import LikedIcon from "../assets/liked.svg"
import VideosIcon from "../assets/videos.svg"
import HistoryIcon from "../assets/history.svg"
import LibraryIcon from "../assets/library.svg"
import SubscribeIcon from "../assets/subscribe.svg"
import Wathclater from '../assets/watchlater.svg'
import conf from "./conf"


const apiKey = conf.apikey; 

export const VIDEO_LIST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${apiKey}`;
export const COMMENTS_THREAD_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${apiKey}&maxResults=100`;
export const VIDEO_INFO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${apiKey}` ;
export const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${apiKey}`;
export const AUTOSUGGESTION_SEARCH_URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
export const SIDEBAR_OPTIONS = [
    {
        icon: HomeIcon,
        name: "Home"
    },
    {
        icon: ShortsIcon,
        name: "Shorts"
    },
    {
        icon: SubscribeIcon,
        name: "Subscriptions"
    },
    {
        icon: LibraryIcon,
        name: "Library"
    },
    {
        icon: HistoryIcon,
        name: "History"
    },
    {
        icon: VideosIcon,
        name: "Your Videos"
    },
    {
        icon: Wathclater,
        name: "Watch Later"
    },
    {
        icon: LikedIcon,
        name: "Liked Videos"
    },
    {
        icon: ShowMoreIcon,
        name: "Show More"
    },
    {
        icon: SettingsIcon,
        name: "Settings"
    },
    {
        icon: HelpIcon,
        name: "Help"
    },
    {
        icon: FeedbackIcon,
        name: "Send Feeback"
    },
]