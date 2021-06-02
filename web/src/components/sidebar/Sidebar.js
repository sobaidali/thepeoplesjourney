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
import { dummyUsers } from "./users";


const Sidebar = () => {
    var chatbox;
    var container;
    let commentArr = [
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
        author: 'Matt',
        datetime: 'Today at 5:42PM',
        text: 'This has been very useful for my research. Thanks as well!',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
        author: 'Matt',
        datetime: 'Today at 5:42PM',
        text: 'This has been very useful for my research. Thanks as well!',
      }
    ];

    const [cmnt, setComment] = useState([])
    const [rep, setRep] = useState("");
    const [collapsed, setCollapsed] = useState(true);

    const handleCheckbox = (e, { checked }) => setCollapsed(!collapsed)

    const handleReplyChange = (e) => {
      e.preventDefault()

      const { value } = e.target;
      setRep(value)
    }

    const handleClick = (userId) => {

      /* Retrieve the two users that will participate in the conversation */
      // const { currentUser } = this.state;
      const user = dummyUsers.find(user => user.id === userId)
      
      /* Session initialization code */
      Talk.ready
      .then(() => {
      /* Create the two users that will participate in the conversation */
      const me = new Talk.User({
          id: "2",
          name: "Kelvin Samson",
          email: "kelvin@sample.com",
          photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
          role: "Member",
          info: "Product Designer at Facebook",
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

    const handleReplySubmit = (e) => {
      e.preventDefault();
      let arr = [...cmnt];

      let obj = {
          avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
          author: 'Matt',
          datetime: 'Today at 5:42PM',
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
              // maybe push to the route
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
                    itemId: "/another/teams"
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
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Raicons name="activity" />
              }
            ]}
          />
          </div>
        </div>
            </Col>
            <Col lg={5}>
          <Row className="frow my-3">
            <Col lg={7}>
              <Form>
                <Form.TextArea label='Hello, please post what is on your mind.' placeholder='Share with you community.' />
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
                        <Comment.Group size='mini' className="commentgrp" collapsed={collapsed}>
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
                                <Comment.Actions>
                                  <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
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
                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                        <Feed.Date>4 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra images>
                        <a>
                          <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                        <a>
                          <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />1 Like
                        </Feed.Like>
                        <Feed.Like>
                            Comment
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Feed.Content>
                      <Feed.Summary
                        date='2 Days Ago'
                        user='Jenny Hess'
                        content='add you as a friend'
                      />
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />8 Likes
                        </Feed.Like>
                        <Feed.Like>
                            Comment
                        </Feed.Like>
                      </Feed.Meta>
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

                  <Feed.Event>
                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                        <Feed.Date>4 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra images>
                        <a>
                          <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                        <a>
                          <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />
                          41 Likes
                        </Feed.Like>
                        <Feed.Like>
                            Comment
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
                  
            </Col>
            <Col lg={5}>
                  <div className="users">
                    <div className="users-container">
                    <ul>
                    { dummyUsers.map(user =>
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
