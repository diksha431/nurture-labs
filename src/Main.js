import React,{ Component } from "react";
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import { spacing } from '@material-ui/system';
//import Rating from '@material-ui/lab/Rating';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import TitleOutlinedIcon from '@material-ui/icons/TitleOutlined';
import StarRateIcon from '@material-ui/icons/StarRate';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';

export default function Main()
{
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    
    return(
        <Box display="flex" p={1} className="m1">
            <Box display="flex" p={1} className="m2" border={1} style={{color:"lightgray"}}>
                <Box p={1} m={0.5}>
                    <FiberManualRecordIcon style={{color:"green"}}/>
                </Box>
                <Box p={1} mt={0.5} >
                    <Typography variant="P" className="m7">Logo</Typography>
                </Box>
                
                <Box p={1} ml={40}>
                    <Button size="small" style={{fontWeight:"bold"}}>dashboard</Button>
                </Box>
                <Box p={1} ml={2}>
                    <Button size="small" style={{fontWeight:"bold"}}>find experts</Button>
                </Box>
                <Box p={1} ml={2} >
                    <Button size="small" style={{fontWeight:"bold"}}>Discussion</Button>
                </Box>
                <Box p={1} ml={20} >
                    <NotificationsNoneOutlinedIcon fontSize="small" style={{color:"orange"}}/>
                </Box>
                <Box p={1} ml={1}>
                    <SmsOutlinedIcon fontSize="small" style={{color:"orange"}}/>
                </Box>
                <Box p={1} ml={1}>
                    <Avatar alt="David" src="p1.jpeg" style={{width:"1em",height:"1em"}}/>
                </Box>
                <Box p={1}>
                    <ExpandMoreOutlinedIcon fontSize="small" style={{color:"orange"}}/>
                </Box>
            </Box>
            <Box display="flex" p={1} className="m3">
                <Box p={1} >
                    <Typography variant="P" className="m7">Filters</Typography>
                </Box>
                <Box p={1} ml={37}>
                    <Typography variant="P" className="m7">Feature Experts</Typography>
                </Box>
                <Box p={2} ml={64} width={150} >
                    <FormControl variant="outlined" size="small" style={{marginTop:"-1em",width:"9em",backgroundColor:"white"}}>
                    <InputLabel style={{color:"black"}}>Best Match</InputLabel>
                    <Select label="Best Match">
                    <MenuItem ></MenuItem>
                    </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box display="flex" p={1} className="m4">
                <Box display="flex" p={1} className="m5" border={1} style={{color:"lightgray"}}>
                <div>
                    <Box my={0.5} width={300} height={100} >
                        <Typography variant="P" className="m8">EXPERTISE</Typography><br/>
                        <Box mt={1}>
                            <AppBar position="static" style={{backgroundColor:"gainsboro",padding:"0.5em"}}>
                                <Chip label="Branding" size="small" onDelete={handleDelete} color="primary" style={{width:"8em"}} />
                                <SearchIcon style={{marginLeft:"11em",color:"green",marginTop:"-1em"}}/>
                            </AppBar>
                            <Chip label="Strategy" size="small" onDelete={handleDelete} style={{marginTop:"0.5em",width:"8em",backgroundColor:"yellowgreen"}} />
                        </Box>
                    </Box>
                    <Box my={5} height={100} width={300} >
                        <Typography variant="P" className="m8">FOCUS AREA</Typography>
                        <Box mt={1}>
                            <AppBar position="static" style={{backgroundColor:"gainsboro",padding:"0.5em"}}>
                                <Chip label="Focus Area" size="small" onDelete={handleDelete} color="primary" style={{width:"8em"}} />
                                <Chip label="Focus Area" size="small" onDelete={handleDelete} color="primary" style={{width:"8em",marginLeft:"9em",marginTop:"-1.8em"}} />
                                <SearchIcon style={{marginLeft:"11em",color:"green",marginTop:"-1em"}}/>
                            </AppBar>
                            <Chip label="Focus Area" size="small" onDelete={handleDelete} style={{marginTop:"0.5em",width:"8em",backgroundColor:"yellowgreen"}} />
                            <Chip label="Focus Area" size="small" onDelete={handleDelete} color="primary" style={{width:"8em",marginLeft:"9em",marginTop:"-4em"}} />
                        </Box>  
                    </Box>
                    <Box my={2} height={100} width={300} >
                        <Typography variant="P" className="m8">RATINGS</Typography>
                        <div className="m9">
                            <Box mb={-2} ><Checkbox defaultChecked size="small" style={{color:"green"}}/><Typography variant="P" className="m10">4-Star</Typography>
                            <Checkbox size="small"/><Typography variant="P" className="m10">3-Star</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">3-Star</Typography>
                            <Checkbox size="small"/><Typography variant="P" className="m10">2-Star</Typography></Box>
                        </div> 
                    </Box>
                    <Box my={5} height={150} width={300} >
                        <Typography variant="P" className="m8">PRICE</Typography>
                        <div className="m9">
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">Free</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">Less than $25</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">$25-$50</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">$50-$100</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">More than $100</Typography></Box>
                        </div>
                    </Box>
                    <Box my={5} height={100} width={300} >
                        <Typography variant="P" className="m8">SESSION AVAILABILITY</Typography>
                        <div className="m9">
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">30 min</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">60 min</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">15 min</Typography></Box>
                        </div>
                    </Box>
                    <Box my={5} height={190} width={300} >
                        <Typography variant="P" className="m8">LANGUAGE</Typography>
                        <div className="m9">
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">English</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">French</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">German</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">Hindi</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">Arabic</Typography></Box>
                            <Box mb={-2} ><Checkbox size="small"/><Typography variant="P" className="m10">Mandarin Chinese</Typography></Box>
                            <Box ml={5} mt={1}><Button size="small" style={{color:"green"}}>more</Button></Box>
                        </div>
                    </Box>
                </div>
                </Box>
                <Box display="flex" p={1} className="m6">
                <div>
                    <Box display="flex" border={1} p={1} width={780} height={200} style={{backgroundColor:"white",color:"lightgray"}}>
                        <Box width={150} >
                            <Box p={1} ml= {2} width={100} height={80} >
                                <Avatar alt="David" src="p1.jpeg" style={{width:"5em",height:"4.5em"}}/>
                            
                            </Box>
                            <Box mt={1} ml={3} height={20} width={70} >
                                <Typography variant="P" className="m13">Price :</Typography>
                                <Typography variant="P" className="m14">FREE</Typography>
                                
                            </Box>
                            <Box mt={1} ml={3} width={100} height={30} >
                                <Box p={0.5} width={12} height={20} >
                                    <StarRateIcon style={{fontSize:"large",color:"orange"}} />
                                </Box>
                                <Box width={20} height={20} ml={4} mt={-3.5} >
                                    <Typography variant="P" className="m15">4.9</Typography>
                                </Box>
                                <Box width={27} ml={7} mt={-2.5} height={20} >
                                    <Typography variant="P" className="m11">(120)</Typography>
                                </Box>
                            </Box>
                                   
                        </Box>
                        <Box  ml={1} width={620} >
                            <Box  width={620} height={50} >
                                <Typography variant="P" className="m12">David Melvik</Typography><br/>
                                <Typography variant="P" className="m11">Founder @ The Millennials & CEO @ABC</Typography>

                                <Box width={20} height={40} ml={57} mt={-5} >
                                    <FormControlLabel
                                    control={<Checkbox style={{color:"orange"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  />}
                                    />
                                </Box>
                                <Box width={120} height={40} ml={62} mt={-5}>
                                    <Button variant="contained" size="small" style={{backgroundColor:"orange",color:"white",width:"9em"}}>View Profile</Button>
                                </Box>
                            </Box>
                            <Box mt={1} height={30} borderTop={1}>
                                <Box p={0.5} width={12} height={20} >
                                    <TimerOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={130} height={20} ml={3} mt={-3.5} >
                                    <Typography variant="P" className="m13">02 Free Sessions Available</Typography>
                                </Box>
                                <Box p={1} width={12} ml={21} mt={-3} height={20} >
                                    <LocationOnOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={80} height={20} ml={24} mt={-4}  >
                                    <Typography variant="P" className="m13">Tampa, FL, USA</Typography>
                                </Box>
                                <Box p={1} width={12} ml={36} mt={-3} height={20} >
                                    <TitleOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={110} height={20} ml={39} mt={-4} >
                                    <Typography variant="P" className="m13">Greek, English, French</Typography>
                                </Box>
                            </Box>
                            <Box mt={1} width={620} height={50} >
                                <Typography variant="P" className="m11">
                                Dites-moi d'où il vient, Enfin je saurais où je vais, Maman dit que lorsqu'on cherche bien, On finit toujours par trouver,
                                Elle dit qu'il n'est jamais très loin, Qu'il part très souvent travailler, Maman dit "travailler c'est bien", Bien mieux qu'être mal accompagné,
                                </Typography>
                            </Box>
                            <Box mt={1} height={30} >
                                <Chip size="small" label="Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="SEO" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Content Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Marketing Automation" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" border={1} p={1} mt={2} width={780} height={200} style={{backgroundColor:"white",color:"lightgray"}}>
                        <Box width={150} >
                            <Box p={1} ml= {2} width={100} height={80} >
                                <Avatar alt="David" src="p1.jpeg" style={{width:"5em",height:"4.5em"}}/>
                            
                            </Box>
                            <Box mt={1} ml={3} height={20} width={70} >
                                <Typography variant="P" className="m13">Price :</Typography>
                                <Typography variant="P" className="m14">FREE</Typography>
                                
                            </Box>
                            <Box mt={1} ml={3} width={100} height={30} >
                                <Box p={0.5} width={12} height={20} >
                                    <StarRateIcon style={{fontSize:"large",color:"orange"}} />
                                </Box>
                                <Box width={20} height={20} ml={4} mt={-3.5} >
                                    <Typography variant="P" className="m15">4.9</Typography>
                                </Box>
                                <Box width={27} ml={7} mt={-2.5} height={20} >
                                    <Typography variant="P" className="m11">(120)</Typography>
                                </Box>
                            </Box>
                                   
                        </Box>
                        <Box  ml={1} width={620}>
                            <Box  width={620} height={50} >
                                <Typography variant="P" className="m12">David Melvik</Typography><br/>
                                <Typography variant="P" className="m11">Founder @ The Millennials & CEO @ABC</Typography>

                                <Box width={20} height={40} ml={57} mt={-5} >
                                    <FormControlLabel
                                    control={<Checkbox style={{color:"orange"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  />}
                                    />
                                </Box>
                                <Box width={120} height={40} ml={62} mt={-5}>
                                    <Button variant="contained" size="small" style={{backgroundColor:"orange",color:"white",width:"9em"}}>View Profile</Button>
                                </Box>
                            </Box>
                            <Box mt={1} height={30} borderTop={1}>
                                <Box p={0.5} width={12} height={20} >
                                    <TimerOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={130} height={20} ml={3} mt={-3.5} >
                                    <Typography variant="P" className="m13">02 Free Sessions Available</Typography>
                                </Box>
                                <Box p={1} width={12} ml={21} mt={-3} height={20} >
                                    <LocationOnOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={80} height={20} ml={24} mt={-4}  >
                                    <Typography variant="P" className="m13">Tampa, FL, USA</Typography>
                                </Box>
                                <Box p={1} width={12} ml={36} mt={-3} height={20} >
                                    <TitleOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={110} height={20} ml={39} mt={-4} >
                                    <Typography variant="P" className="m13">Greek, English, French</Typography>
                                </Box>
                            </Box>
                            <Box mt={1} width={620} height={50}>
                                <Typography variant="P" className="m11">
                                Dites-moi d'où il vient, Enfin je saurais où je vais, Maman dit que lorsqu'on cherche bien, On finit toujours par trouver,
                                Elle dit qu'il n'est jamais très loin, Qu'il part très souvent travailler, Maman dit "travailler c'est bien", Bien mieux qu'être mal accompagné,
                                </Typography>
                            </Box>
                            <Box mt={1} height={30} >
                                <Chip size="small" label="Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="SEO" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Content Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Marketing Automation" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" border={1} p={1} mt={2} width={780} height={200} style={{backgroundColor:"white",color:"lightgray"}}>
                        <Box width={150} >
                            <Box p={1} ml= {2} width={100} height={80} >
                                <Avatar alt="David" src="p1.jpeg" style={{width:"5em",height:"4.5em"}}/>
                            
                            </Box>
                            <Box mt={1} ml={3} height={20} width={70}>
                                <Typography variant="P" className="m13">Price :</Typography>
                                <Typography variant="P" className="m14">FREE</Typography>
                                
                            </Box>
                            <Box mt={1} ml={3} width={100} height={30} >
                                <Box p={0.5} width={12} height={20} >
                                    <StarRateIcon style={{fontSize:"large",color:"orange"}} />
                                </Box>
                                <Box width={20} height={20} ml={4} mt={-3.5} >
                                    <Typography variant="P" className="m15">4.9</Typography>
                                </Box>
                                <Box width={27} ml={7} mt={-2.5} height={20} >
                                    <Typography variant="P" className="m11">(120)</Typography>
                                </Box>
                            </Box>
                                   
                        </Box>
                        <Box  ml={1} width={620} >
                            <Box  width={620} height={50} >
                                <Typography variant="P" className="m12">David Melvik</Typography><br/>
                                <Typography variant="P" className="m11">Founder @ The Millennials & CEO @ABC</Typography>

                                <Box width={20} height={40} ml={57} mt={-5} >
                                    <FormControlLabel
                                    control={<Checkbox style={{color:"orange"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  />}
                                    />
                                </Box>
                                <Box width={120} height={40} ml={62} mt={-5}>
                                    <Button variant="contained" size="small" style={{backgroundColor:"orange",color:"white",width:"9em"}}>View Profile</Button>
                                </Box>
                            </Box>
                            <Box mt={1} height={30} borderTop={1}>
                                <Box p={0.5} width={12} height={20} >
                                    <TimerOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={130} height={20} ml={3} mt={-3.5} >
                                    <Typography variant="P" className="m13">02 Free Sessions Available</Typography>
                                </Box>
                                <Box p={1} width={12} ml={21} mt={-3} height={20} >
                                    <LocationOnOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={80} height={20} ml={24} mt={-4}  >
                                    <Typography variant="P" className="m13">Tampa, FL, USA</Typography>
                                </Box>
                                <Box p={1} width={12} ml={36} mt={-3} height={20} >
                                    <TitleOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={110} height={20} ml={39} mt={-4} >
                                    <Typography variant="P" className="m13">Greek, English, French</Typography>
                                </Box>
                            </Box>
                            <Box mt={1} width={620} height={50} >
                                <Typography variant="P" className="m11">
                                Dites-moi d'où il vient, Enfin je saurais où je vais, Maman dit que lorsqu'on cherche bien, On finit toujours par trouver,
                                Elle dit qu'il n'est jamais très loin, Qu'il part très souvent travailler, Maman dit "travailler c'est bien", Bien mieux qu'être mal accompagné,
                                </Typography>
                            </Box>
                            <Box mt={1} height={30} >
                                <Chip size="small" label="Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="SEO" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Content Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Marketing Automation" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" border={1} p={1} mt={2} width={780} height={200} style={{backgroundColor:"white",color:"lightgray"}}>
                        <Box width={150} >
                            <Box p={1} ml= {2} width={100} height={80} >
                                <Avatar alt="David" src="p1.jpeg" style={{width:"5em",height:"4.5em"}}/>
                            
                            </Box>
                            <Box mt={1} ml={3} height={20} width={70} >
                                <Typography variant="P" className="m13">Price :</Typography>
                                <Typography variant="P" className="m14">FREE</Typography>
                                
                            </Box>
                            <Box mt={1} ml={3} width={100} height={30} >
                                <Box p={0.5} width={12} height={20} >
                                    <StarRateIcon style={{fontSize:"large",color:"orange"}} />
                                </Box>
                                <Box width={20} height={20} ml={4} mt={-3.5} >
                                    <Typography variant="P" className="m15">4.9</Typography>
                                </Box>
                                <Box width={27} ml={7} mt={-2.5} height={20} >
                                    <Typography variant="P" className="m11">(120)</Typography>
                                </Box>
                            </Box>
                                   
                        </Box>
                        <Box  ml={1} width={620} >
                            <Box  width={620} height={50} >
                                <Typography variant="P" className="m12">David Melvik</Typography><br/>
                                <Typography variant="P" className="m11">Founder @ The Millennials & CEO @ABC</Typography>

                                <Box width={20} height={40} ml={57} mt={-5} >
                                    <FormControlLabel
                                    control={<Checkbox style={{color:"orange"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  />}
                                    />
                                </Box>
                                <Box width={120} height={40} ml={62} mt={-5}>
                                    <Button variant="contained" size="small" style={{backgroundColor:"orange",color:"white",width:"9em"}}>View Profile</Button>
                                </Box>
                            </Box>
                            <Box mt={1} height={30} borderTop={1}>
                                <Box p={0.5} width={12} height={20} >
                                    <TimerOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={130} height={20} ml={3} mt={-3.5} >
                                    <Typography variant="P" className="m13">02 Free Sessions Available</Typography>
                                </Box>
                                <Box p={1} width={12} ml={21} mt={-3} height={20} >
                                    <LocationOnOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={80} height={20} ml={24} mt={-4}  >
                                    <Typography variant="P" className="m13">Tampa, FL, USA</Typography>
                                </Box>
                                <Box p={1} width={12} ml={36} mt={-3} height={20} >
                                    <TitleOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={110} height={20} ml={39} mt={-4} >
                                    <Typography variant="P" className="m13">Greek, English, French</Typography>
                                </Box>
                            </Box>
                            <Box mt={1} width={620} height={50} >
                                <Typography variant="P" className="m11">
                                Dites-moi d'où il vient, Enfin je saurais où je vais, Maman dit que lorsqu'on cherche bien, On finit toujours par trouver,
                                Elle dit qu'il n'est jamais très loin, Qu'il part très souvent travailler, Maman dit "travailler c'est bien", Bien mieux qu'être mal accompagné,
                                </Typography>
                            </Box>
                            <Box mt={1} height={30} >
                                <Chip size="small" label="Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="SEO" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Content Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Marketing Automation" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" border={1} p={1} mt={2} width={780} height={200} style={{backgroundColor:"white",color:"lightgray"}}>
                        <Box width={150} >
                            <Box p={1} ml= {2} width={100} height={80}>
                                <Avatar alt="David" src="p1.jpeg" style={{width:"5em",height:"4.5em"}}/>
                            
                            </Box>
                            <Box mt={1} ml={3} height={20} width={70} >
                                <Typography variant="P" className="m13">Price :</Typography>
                                <Typography variant="P" className="m14">FREE</Typography>
                                
                            </Box>
                            <Box mt={1} ml={3} width={100} height={30} >
                                <Box p={0.5} width={12} height={20} >
                                    <StarRateIcon style={{fontSize:"large",color:"orange"}} />
                                </Box>
                                <Box width={20} height={20} ml={4} mt={-3.5} >
                                    <Typography variant="P" className="m15">4.9</Typography>
                                </Box>
                                <Box width={27} ml={7} mt={-2.5} height={20} >
                                    <Typography variant="P" className="m11">(120)</Typography>
                                </Box>
                            </Box>
                                   
                        </Box>
                        <Box  ml={1} width={620} >
                            <Box  width={620} height={50} >
                                <Typography variant="P" className="m12">David Melvik</Typography><br/>
                                <Typography variant="P" className="m11">Founder @ The Millennials & CEO @ABC</Typography>

                                <Box width={20} height={40} ml={57} mt={-5} >
                                    <FormControlLabel
                                    control={<Checkbox style={{color:"orange"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  />}
                                    />
                                </Box>
                                <Box width={120} height={40} ml={62} mt={-5}>
                                    <Button variant="contained" size="small" style={{backgroundColor:"orange",color:"white",width:"9em"}}>View Profile</Button>
                                </Box>
                            </Box>
                            <Box mt={1} height={30} borderTop={1}>
                                <Box p={0.5} width={12} height={20} >
                                    <TimerOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={130} height={20} ml={3} mt={-3.5} >
                                    <Typography variant="P" className="m13">02 Free Sessions Available</Typography>
                                </Box>
                                <Box p={1} width={12} ml={21} mt={-3} height={20} >
                                    <LocationOnOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={80} height={20} ml={24} mt={-4}  >
                                    <Typography variant="P" className="m13">Tampa, FL, USA</Typography>
                                </Box>
                                <Box p={1} width={12} ml={36} mt={-3} height={20} >
                                    <TitleOutlinedIcon style={{fontSize:"small"}} />
                                </Box>
                                <Box width={110} height={20} ml={39} mt={-4} >
                                    <Typography variant="P" className="m13">Greek, English, French</Typography>
                                </Box>
                            </Box>
                            <Box mt={1} width={620} height={50} >
                                <Typography variant="P" className="m11">
                                Dites-moi d'où il vient, Enfin je saurais où je vais, Maman dit que lorsqu'on cherche bien, On finit toujours par trouver,
                                Elle dit qu'il n'est jamais très loin, Qu'il part très souvent travailler, Maman dit "travailler c'est bien", Bien mieux qu'être mal accompagné,
                                </Typography>
                            </Box>
                            <Box mt={1} height={30} >
                                <Chip size="small" label="Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="SEO" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Content Marketing" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                                <Chip size="small" label="Marketing Automation" style={{color:"gray",fontSize:"x-small",marginRight:"1em"}}/>
                            </Box>
                        </Box>
                    </Box>
                    
                </div>
                </Box>
            </Box>
        </Box>
     
    );
}

