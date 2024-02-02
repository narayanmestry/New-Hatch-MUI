import DvrIcon from '@mui/icons-material/Dvr';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PendingIcon from '@mui/icons-material/Pending';
import StarsIcon from '@mui/icons-material/Stars';
import HandymanIcon from '@mui/icons-material/Handyman';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import Person2Icon from '@mui/icons-material/Person2';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import PhonelinkIcon from '@mui/icons-material/Phonelink';

type Icon = {
    iconName: string
}

function MaterialIcon( props: Icon ) {
    if ( props.iconName === "DvrIcon" )  return <DvrIcon />

    if ( props.iconName === "WatchLaterIcon" )  return <WatchLaterIcon />
    if ( props.iconName === "LeaderboardIcon" )  return <LeaderboardIcon />
    if ( props.iconName === "PendingIcon" )  return <PendingIcon />
    if ( props.iconName === "StarsIcon" )  return <StarsIcon />
    if ( props.iconName === "HandymanIcon" )  return <HandymanIcon />
    if ( props.iconName === "OfflineBoltIcon" )  return <OfflineBoltIcon />
    if ( props.iconName === "DescriptionIcon" )  return <DescriptionIcon />

    if ( props.iconName === "TempleHinduIcon" )  return <TempleHinduIcon />
    if ( props.iconName === "Person2Icon" )  return <Person2Icon />
    if ( props.iconName === "AccountTreeSharpIcon" )  return <AccountTreeSharpIcon />
    if ( props.iconName === "AccountCircleIcon" )  return <AccountCircleIcon />

    if ( props.iconName === "LightbulbIcon" )  return <LightbulbIcon />

    if ( props.iconName === "BuildIcon" )  return <BuildIcon />
    if ( props.iconName === "ImportContactsIcon" )  return <ImportContactsIcon />
    if ( props.iconName === "SettingsIcon" )  return <SettingsIcon />
    if ( props.iconName === "EditIcon" )  return <EditIcon />
    if ( props.iconName === "AddCircleOutlineOutlinedIcon" )  return <AddCircleOutlineOutlinedIcon />
    if ( props.iconName === "ArrowLeftOutlinedIcon" )  return <ArrowLeftOutlinedIcon />
    if ( props.iconName === "PhoneLink") return <PhonelinkIcon/>
}
export default MaterialIcon