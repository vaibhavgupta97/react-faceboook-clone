import React from 'react'
import './Contacts.css';
import People from './People';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Contacts() {
    return (
        <div className="contacts">
<div className="contacts__top">  
<h3>Contacts</h3>
<div className="contacts__icon">
<VideoCallIcon className="contacts__icon1"/>
<SearchIcon className="contacts__icon1"/>
<MoreHorizIcon className="contacts__icon1"/>
</div>
</div>
<div className="contacts__down"> 

<People
image="https://www.biography.com/.image/t_share/MTE1ODA0OTcxOTUwODM1MjEz/adam-levine-20830773-1-402.jpg"
name="Adam Levine"
/> 
<People
image="https://drb754knus754.cloudfront.net/images-web/uploads/rjs/2018-02-12/fit/b93681ba901dffe6f763935e4223b770_800_600.jpg"
name="Saurabh Kumar"
/>

<People
image="https://www.actcommodities.com/wp-content/uploads/Akash-DSC_3319-420x540.png"
name="Sameer"
/>

<People
image="https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/09/03/Pictures/_baec8346-edeb-11ea-8892-0a48b6ec0f6e.jpg"
name="Anamika"
/>
<People
image="https://upload.wikimedia.org/wikipedia/commons/6/60/John_Cena_July_2018.jpg"
name="John Cena"
/> 
<People
image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F11%2F27%2Fdonald-trump-3.jpg"
name="Donald Trump"
/>

<People
image="https://c.ndtvimg.com/2020-12/3t0lnrao_vladimir-putin-afp_625x300_17_December_20.jpg"
name="Vladimir Putin"
/>

<People
image="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/05/Mark-Zuckerberg-e1590173646243-960x722.jpg"
name="Mark Zuckerberg"
/>

<People
image="https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1300&quality=85&auto=format&fit=max&s=a25f5a7ac8ae0a6153eded7f200f3bd2"
name="Jeff Bezos"
/>

<People
image="https://pbs.twimg.com/profile_images/1180491411172413440/AunoqDQW.jpg"
name="Amit Shah"
/>

<People
image="https://pbs.twimg.com/profile_images/1125955579774586880/cG3bJ2Cq_400x400.jpg"
name="Aman Sharma"
/>

<People
image="https://starsunfolded.com/wp-content/uploads/2017/11/Saurabh-Pandey.jpg"
name="Akash"
/>


</div>
        </div>
    )
}

export default Contacts;
