import React, { useState } from 'react'
import Rectangle from '../../StyledUI/BaseComponents/Rectangle'
import Img from '../../StyledUI/BaseComponents/Img'
import BaseButton from '../../StyledUI/BaseComponents/BaseButton'
import { css } from 'styled-components'
import Text from '../../StyledUI/BaseComponents/Text'
import StyledButton from '../../StyledUI/BuildingBlocks/StyledButton'
import Iphone from './img/iphone.svg'
import Br from '../../StyledUI/BuildingBlocks/Br'
import Logo from './img/logo'
import Flex from '../../StyledUI/BaseComponents/Flex'
import Legal from './img/legal.svg'
import { TransitionPresets } from '../../StyledUI/animations/transition/presets'
import Markdown from 'react-markdown'
import Elips from './img/decorationElips.svg'
import Ai from './img/ai.svg'
import Features from './img/features.svg'

const advantages = [
  { text: 'Figure out any document, faster than making coffee', value: '☕️' },
  {
    text: 'With Agreemer bot you have the advantage over any legal situation',
    value: '😎',
  },
  {
    text: 'We eliminate legal language barriers, no need to be a loyer',
    value: '🧑‍🎓',
  },
]

const slides = [
  {
    name: 'Features',
    title: 'Streamline your document workflow using:',
    points: [
      '**Smart Summary:** Get the gist of extensive documents in moments. Our summaries capture essential details, saving you hours of reading.',
      '**Risks Detection:** Navigate through documents with foresight. Agreemer-Bot highlights potential issues, from legal ambiguities to clauses that could pose risks, equipping you with the knowledge to act proactively.',
      '**Multilingual Support:** Leap over language barriers with ease. Whether you’re dealing with contracts in French or reports in Spanish, Agreemer-Bot speaks your language.',
      '**Commitment to Privacy:** Your trust is our top priority. With one click, erase your history, ensuring that your documents and discussions remain your own.',
    ],
    advantages,
    image: Features,
  },
  {
    name: 'Why choose us?',
    title: 'Our advantages over competition:',
    points: [
      '**Commitment to Privacy:** Your trust is our top priority. With one click, erase your history, ensuring that your documents and discussions remain your own.',
      '**Simplicity at Your Fingertips:** Say farewell to complex procedures. Agreemer-Bot’s user-friendly interface makes document analysis as simple as a click.',
      '**Accuracy You Can Trust:** Powered by advanced AI algorithms, Agreemer-Bot delivers precise summaries and risk assessments, ensuring you never miss a beat.\n',
    ],
    advantages,
    image: Legal,
  },
  {
    name: 'How it works?',
    title: 'We give you the most simple legal tool there is:',
    points: [
      'You can send any text document, Agreemer works better with legal documents but you can try it out on many other things',
      'You can ask Agreemer to make fast document summary if want to get the gist of it',
      'Agreemer can analyze risks for you and answer all your questions about the document, ask away!',
    ],
    advantages,
    image: Ai,
  },
]

export default function Landing() {
  const [selectedSlide, setSelectedSlide] = useState(slides[0].name)
  const selectedslide = slides.find(slide => slide.name === selectedSlide)
  return (
    <Rectangle flex column centered padding={'30px 8%'}>
      <Rectangle
        flex
        row
        justifyContent={'space-between'}
        alignItems={'center'}
        width={['100%', { max: 1440 }]}
        fragment={css`
          margin-bottom: 60px`}
      >
        <Logo height={50} />
        <BaseButton fragment={css`font-family: "Anonymous Pro", "system-ui"`}>
          <Text label huge>
            Contact Us
          </Text>
        </BaseButton>
      </Rectangle>
      <Rectangle
        flex
        row
        justifyContent={'space-between'}
        alignItems={'center'}
        width={['100%', { max: 1440 }]}
        gap={32}
      >
        <Rectangle flex width={['100%', { max: 575 }]} column alignItems={'flex-start'}>
          <Text heading big>
            Draft easy - Negotiate fast
          </Text>
          <Br height={17} />
          <Text body big>
            Your Ultimate AI-Powered Assistant for Seamless Document Analysis!
          </Text>
          <Br height={8} />
          <Text body big>
            Say goodbye to the hassle of lengthy document reviews and hello to efficiency
            with Agreemer Bot.
          </Text>
          <Br height={25} />
          <StyledButton primary margin={0} big>
            Try it out
          </StyledButton>
        </Rectangle>
        <Img src={Iphone} height={'40vw'} />
      </Rectangle>
      <Br height={60} />
      <Rectangle
        flex
        centered
        column
        relative
        overflow={'visible'}
        height={['max-content', { min: 1024 }]}
        padding={'30px 0px'}
      >
        <Rectangle width={['100%', { max: 1440 }]} flex column alignItems={'stretch'}>
          <Rectangle
            fragment={css`border-bottom: solid 1px rgba(12, 193, 139, 1)`}
            flex
            row
            height={40}
          >
            {slides.map(slide => {
              return (
                <BaseButton
                  grow={2}
                  key={slide.name}
                  transition={TransitionPresets.bezier(0.2)}
                  fragment={
                    selectedSlide === slide.name
                      ? css`border-bottom: solid 3px rgba(12, 193, 139, 1)`
                      : undefined
                  }
                  onClick={() => {
                    setSelectedSlide(slide.name)
                  }}
                >
                  <Text label big bold mobile={{ small: true }}>
                    {slide.name}
                  </Text>
                </BaseButton>
              )
            })}
          </Rectangle>
          <Br height={32} />
          <Flex
            row
            mobile={{ column: true }}
            justifyContent={'space-between'}
            centered
            gap={40}
          >
            <Rectangle flex column gap={24}>
              <Text heading big>
                {selectedslide?.title}
              </Text>
              {(selectedslide?.points || []).map(point => {
                return (
                  <Flex row key={point} alignItems={'center'} gap={10}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M0 0.75L5.5 5.25L0 9.75V0.75Z" fill="#0CC18B" />
                    </svg>
                    <Text
                      as={'div'}
                      label
                      big
                      fragment={css`
                        p {
                          margin: 0px;
                        }`}
                    >
                      <Markdown>{point}</Markdown>
                    </Text>
                  </Flex>
                )
              })}
            </Rectangle>
            <Img
              src={selectedslide?.image}
              mobile={{
                absolute: true,
                opacity: 0,
                zIndex: -1,
              }}
            />
          </Flex>
          <Br height={90} />
          <Flex column justifyContent={'space-between'} gap={16}>
            {(selectedslide?.advantages || []).map((advantage, index) => {
              return (
                <Flex
                  key={advantage.text}
                  row
                  reverse={index % 2 !== 0}
                  centered
                  justifyContent={'flex-start'}
                  gap={21}
                >
                  <Rectangle
                    width={88}
                    height={88}
                    flex
                    shrink={0}
                    centered
                    border={'4px solid rgba(12, 193, 139, 1)'}
                    borderRadius={50}
                  >
                    <Text heading bold color={'rgba(12, 193, 139, 1)'}>
                      {advantage.value}
                    </Text>
                  </Rectangle>
                  <Text
                    as={'div'}
                    label
                    huge
                    align={index % 2 !== 0 ? 'right' : 'left'}
                    mobile={{ medium: true }}
                  >
                    {advantage.text}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
        </Rectangle>
        <Img
          src={Elips}
          absolute
          width={'100vw'}
          zIndex={-1}
          height={'100%'}
          objectFit={'cover'}
          left={'calc(50% - 50vw)'}
        />
      </Rectangle>
      <Br height={60} />
      <Flex column>
        <Text label big align={'center'}>
          Start your journey towards seamless, efficient, and secure document management
          today.
        </Text>
        <Br height={12} />
        <StyledButton primary big margin={0}>
          Lest go!
        </StyledButton>
        <Br height={40} />
        <Flex row centered gap={36} wrap>
          <BaseButton>
            <Text label color={'rgba(30,30,30,0.4)'}>
              Contact Us
            </Text>
          </BaseButton>
          <Text label color={'rgba(30,30,30,0.4)'} align={'center'}>
            © Agreemet Ltd 2023 All rights reserved
          </Text>
          <BaseButton>
            <Text label color={'rgba(30,30,30,0.4)'}>
              Legal Documents
            </Text>
          </BaseButton>
        </Flex>
      </Flex>
    </Rectangle>
  )
}
