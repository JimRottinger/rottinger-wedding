import React from 'react'
import ReactDom from 'react-dom'

import { Layout, Typography, Row, Col } from 'antd'

const { Title, Paragraph, Text } = Typography

const { Header, Sider, Content } = Layout

import 'antd/dist/antd.css'

const shadowbrookImage = require('./../img/shadowbrook.png')
const ourStoryImage = require('./../img/our-story.jpg')

const RootComponent = () => {
  return (
    <>
      <Layout
        style={{
          background: '#110e25',
          fontSize: '24px',
          height: '100%',
          width: '100%',
        }}
      >
        <Content
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <>
            <Title
              style={{ color: 'rgba(233,233,240,1)' }}
              className="double-font-size"
            >
              James Rottinger & Aileen Saulenas
            </Title>
            <Title level={2} className="gold serif">
              3.27.2021
            </Title>
          </>
          <>
            <img
              width="200px"
              style={{ padding: '15px 0' }}
              src={shadowbrookImage}
            />
            <Paragraph className="serif">
              <Text style={{ color: 'rgba(233,233,240,1)' }}>
                1 Obre Place, Shrewsbury, New Jersey 07702
              </Text>
            </Paragraph>
          </>
        </Content>
      </Layout>
      <Layout
        style={{ height: '100px', width: '100%' }}
        className="navy-to-white"
      ></Layout>
      <Layout
        className="navy"
        style={{ background: '#e9e9f0', padding: '20px' }}
      >
        <Row style={{ height: '100%', display: 'flex' }}>
          <Col span={8}>
            <img style={{ maxWidth: '100%' }} src={ourStoryImage} />
          </Col>
          <Col span={15} push={1}>
            <Title>Our Story</Title>
            <Content className="serif">
              <Paragraph>
                <Text>
                  The story of how we met begins with two letters - R and S.
                  Actually, it is not so much the letters themesleves, but
                  rather, the proximity they hold to one another. For we would
                  almost certainly not be here today were it not for the fact
                  that S immediately follows R in the alphabet. Allow us to
                  explain...
                </Text>
                <br />
                <br />
                <Text>
                  Now, you may have put together that R and S are the first
                  letters of our last names. This very important piece of
                  information is what put us together in a group project in our
                  first year of engineering school at The College of New Jersey.
                  16 students, sorted by last name and divided into four equal
                  groups kicked off a chain of events that gets us to this very
                  day. If only it were that easy of course.
                </Text>
                <br />
                <br />
                <Text>
                  There has certainly always been a connection between us from
                  that first day we met, but it was no happily ever after
                  moment. We were just friends throughout all of college until
                  the very end. We went on a few dates during our last semester,
                  but then our careers took Jim to San Francisco and Aileen to
                  Northeast Philly, and we fell out of touch for a while...
                </Text>
                <br />
                <br />
                <Text>
                  So, how did we get to where we are today? Well, if you have
                  ever seen the movie When Harry Met Sally, a quote from that
                  movie sums up our relationship quite well. "We were friends
                  for a long time.. and then we weren't... and then we fell in
                  love." We were apart for a while and not speaking much, but
                  certainly we never forgot each other.
                </Text>
                <br />
                <br />
                <Text>
                  The conflict resolution of that movie happens when Harry and
                  Sally both realize what they were looking for has been right
                  there all along, and that all of their other attempts at
                  dating were failing because they were actually in love with
                  each other. While real life doesn't exactly play out like the
                  movies, we reconnected at a mutual friend's party while Jim
                  was visiting home one summer. It was as if nothing had ever
                  changed, and that everything we wanted was right there all
                  along.
                </Text>
                <br />
                <br />
                <Text>
                  We started dating shortly thereafter. It must have been a good
                  thing because when we told our friends that we were together,
                  they all said some form of "Finally!" or "When's the wedding?"
                  - as if everyone around us knew it before we did.
                </Text>
                <br />
                <br />
                <Text>
                  From there, Aileen moved out to San Francisco, and then we
                  moved back to New Jersey together and a lot else in between.
                  All of that, combined with the letters R and S, and the Q that
                  Jim popped on Christmas Eve, means that 3/27/2021 will be the
                  last time either of us will ever say "I."
                </Text>
                <br />
                <br />
                <Text>
                  After that, it will always be "we" and WE cannot wait to start
                  our lives together and for all of you to celebrate with us.
                </Text>
                <br />
                <br />
                <Text style={{ float: 'right', paddingRight: '20px' }}>
                  {' '}
                  - Aileen & Jim
                </Text>
              </Paragraph>
            </Content>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

ReactDom.render(<RootComponent />, document.getElementById('react-root'))
