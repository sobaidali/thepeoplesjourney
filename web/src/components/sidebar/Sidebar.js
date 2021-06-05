import React, { useState } from 'react'
import Raicons from "awesome-react-icons";
import {Navigation} from 'react-minimal-side-navigation';
//css
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './style.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Button, Checkbox, Comment, Feed, Form, Header, Icon } from 'semantic-ui-react'
//talkjs
import Talk from "talkjs";
import { Users } from "./users";

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Sidebar = (props) => {
    var chatbox;
    var container;

    const [pst, setPst] = useState([]);
    const [cmnt, setComment] = useState([]);
    const [post, setPost] = useState("");
    const [rep, setRep] = useState("");
    const [collapsed, setCollapsed] = useState(true);

    const handleCheckbox = (e, { checked }) => setCollapsed(!collapsed)

    const handlePostChange = (e) => {
      e.preventDefault();

      const { value } = e.target;

      setPost(value);
    }

    const handleReplyChange = (e) => {
      e.preventDefault()

      const { value } = e.target;
      setRep(value);
    }

    const handleClick = (userId) => {
      /* Retrieve the two users that will participate in the conversation */
      // const { currentUser } = this.state;
      const user = Users.find(user => user.id === userId)
      
      /* Session initialization code */
      Talk.ready
      .then(() => {
      /* Create the two users that will participate in the conversation */
      const me = new Talk.User({
        id: "2",
        name: "Syed Obaidullah Ali",
        email: "obaidullah_syed@hotmail.com",
        photoUrl: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
        role: "Member",
        info: "Software Engineer at 10Pearls",
        welcomeMessage: "Hey there! Love to chat :-)"
      });
      const other = new Talk.User(user)
      
      /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
      if (!window.talkSession) {
        window.talkSession = new Talk.Session({
        appId: "tV9jNpMX",
        me: me
      });
      }
      
      /* Get a conversation ID or create one */
      const conversationId = Talk.oneOnOneId(me, other);
      const conversation = window.talkSession.getOrCreateConversation(conversationId);
      
      /* Set participants of the conversations */
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      
      /* Create and mount chatbox in container */
      chatbox = window.talkSession.createChatbox(conversation);
      chatbox.mount(container);
      })
      .catch(e => console.error(e));
      }

    const handlePostSubmit = (e) => {
      e.preventDefault();

      let arr = [...pst];

      let obj = {
          avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
          author: 'Obaidullah',
          datetime: 'Just now',
          text: post,
      }

      setPst([...arr, obj]);
    }

    const handleReplySubmit = (e) => {
      e.preventDefault();
      let arr = [...cmnt];

      let obj = {
          avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
          author: 'Obaidullah',
          datetime: 'Just now',
          text: rep,
      }

      setComment([...arr, obj]);
    }

    return (
        <div className="ort">
          <Row>
            <Col lg={2}>
            <div className="sidebar">
            <div>
              <p className="text-mes">Welcome to our community</p>
            </div>
            <Navigation
              // you can use your own router's api to get pathname
              activeItemId="/management/members"
              onSelect={({itemId}) => {
              if (itemId==="/another/class") {
                window.location.href = "http://localhost:4200/teacher/true"
              }
            }}
            items={[
              {
                title: "Home",
                itemId: "/home",
                elemBefore: () => <Raicons name="coffee" />
              },
              {
                title: "Dashboard",
                itemId: "/about",
                elemBefore: () => <Raicons name="user" />,
                subNav: [
                  {
                    title: "Tutorials",
                    itemId: "/about/projects"
                  },
                  {
                    title: "Podcasts",
                    itemId: "/about/members"
                  },
                  {
                    title: "Books",
                    itemId: "/about/members"
                  }
                ]
              },
              {
                title: "Mentorship",
                itemId: "/another",
                subNav: [
                  {
                    title: "Find mentor",
                    itemId: "/another/teams"
                  },
                  {
                    title: "Join class",
                    itemId: "/another/class"
                  },
                  {
                    title: "White board",
                    itemId: "/another/teams"
                  }
                ]
              }
            ]}
          />
        <div className="settings">
          <Navigation
            onSelect={({itemId}) => {
              if (itemId==="/settings/signout") {
                props.history.push("/login");

                setTimeout(() => {
                  toast.dark('You have successfully logged out! please come back later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                }, 500);
              }}}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Raicons name="activity" />,
                subNav: [
                  {
                    title: "Sign out",
                    itemId: "/settings/signout"
                  }]
            }]}
          />
          </div>
        </div>
            </Col>
            <Col lg={5}>
          <Row className="frow my-3">
            <Col lg={7}>
              <Form onSubmit={handlePostSubmit}>
                <Form.TextArea label='Hello, please post what is on your mind.' placeholder='Share with you community.' onChange={handlePostChange}/>
                <Button style={{float: "right"}} labelPosition='left' icon='edit' size="small" type="submit" content='Create Post' primary />
              </Form>
              <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Elliot Fu</Feed.User> added you as a friend
                        <Feed.Date>1 Hour Ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />4 Likes
                        </Feed.Like>
                        <Feed.Like>
                        <Checkbox
                          defaultChecked
                          label='Collapse comments'
                          onChange={handleCheckbox}
                        />
                        </Feed.Like>
                      </Feed.Meta>
                        <Comment.Group size='small' className="commentgrp" collapsed={collapsed}>
                          <Header as='h5' dividing>
                            Comments
                          </Header>
                          {cmnt.map(curr => (
                            <>
                            <Comment>
                              <Comment.Avatar src={curr.avatar} />
                              <Comment.Content>
                                <Comment.Author as='a'>{curr.author}</Comment.Author>
                                <Comment.Metadata>
                                  <div>{curr.datetime}</div>
                                </Comment.Metadata>
                                <Comment.Text>{curr.text}</Comment.Text>
                              </Comment.Content>
                            </Comment>
                            </>
                          ))}
                          <Form onSubmit={handleReplySubmit} reply>
                            <Form.TextArea 
                              name="rep"
                              placeholder="Comment here..."
                              onChange={handleReplyChange}
                            />
                            <Button className="rep-btn" size="small" type="submit" content='Add Reply' primary />
                          </Form>
                        </Comment.Group>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Joe Henderson</a> posted on his page
                        <Feed.Date>3 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>
                        Ours is a life of constant reruns. We're always circling back to where
                        we'd we started, then starting all over again. Even if we don't run
                        extra laps that day, we surely will come back for more of the same
                        another day soon.
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />5 Likes
                        </Feed.Like>
                        <Feed.Like>
                            Comment
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                  
                  {pst.map(curr => (
                    <Feed.Event>
                    <Feed.Label image={curr.avatar} />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>{curr.author}</a> posted on his page
                        <Feed.Date>{curr.datetime}</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>
                            {curr.text}
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />5 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                  ))}
                </Feed>
                  
            </Col>
            <Col lg={5}>
                  <div className="users">
                    <div className="users-container">
                    <ul>
                    { Users.map(user =>
                    <li key={user.id} className="user">
                    <picture className="user-picture">
                    <img src={user.photoUrl} alt={`${user.name}`} />
                    </picture>
                    <div className="user-info-container">
                    <div className="user-info">
                    <h4>{user.name}</h4>
                    <p>{user.info}</p>
                    </div>
                    <div className="user-action">
                      <button onClick={(userId) => handleClick(user.id)}>Message</button>
                    </div>
                    </div>
                    </li>
                    )}
                    </ul>
                    <div className="chatbox-container" ref={c => container = c}>
                      <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
                    </div>
                    </div>
                    </div>
                  </Col>
          </Row>
          <Row>
                  <Col lg={7}>
                  </Col>
                  
                </Row>
            </Col>
          </Row>
        </div>
    )
}

export default Sidebar  
