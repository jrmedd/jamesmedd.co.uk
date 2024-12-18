import styled, { css } from 'styled-components'
import { LogoWrapper } from './LogoWrapper'

const ExtendedWrapper = styled(LogoWrapper)(props => css`
  #darker {
    fill: ${props => props.theme.interactive};
    opacity: 0.5;
  }
`)

const name = 'British Airways Logo'

export const BA = props => (
  <ExtendedWrapper aria-label={name} title={name} viewBox="0 0 242 38">
    <path d="M.39 37.24c.53-.27.76-.91.76-1.46v-13.5c0-.57-.23-1.19-.76-1.48h6.43c2.87 0 5.66 1.18 5.66 4.43 0 1.73-1.5 3.1-3.12 3.4 2.33-.02 4.6 1.4 4.6 3.99 0 3.68-3.87 4.62-6.6 4.62H.4Zm5.2-15.02c-.3 0-.5 0-1.05.07v5.75h.65c1.97 0 3.88-.61 3.88-2.9 0-2.26-1.53-2.92-3.48-2.92Zm.41 7.3c-.47 0-.89 0-1.46.04v6.08c.71.14 1.48.19 2.2.19 1.64 0 3.32-.74 3.32-3.26 0-2.49-1.98-3.05-4.06-3.05Zm14.31-7.3c-.29 0-.55.05-.84.09v5.68c.27.02.51.05.78.05 1.85 0 3.22-1.02 3.22-3.03 0-2.06-1.35-2.8-3.16-2.8Zm8.3 15.12c-.64 0-1.33.02-1.93-.16-1.12-.33-2.67-2.85-3.28-3.84-.96-1.6-1.79-3.82-3.93-3.84v6.28c0 .55.25 1.21.78 1.46h-4.94c.52-.27.77-.89.77-1.46v-13.5c0-.57-.25-1.19-.77-1.48h5.95c2.58 0 5.82 1 5.82 4.1 0 2.61-2.16 3.95-4.56 3.95 3.42.02 5.43 8.04 9.2 8.07a11 11 0 0 1-3.12.42Zm3.37-.1c.4-.19.83-.72.83-1.46v-13.5c0-.74-.43-1.27-.83-1.48h5.05c-.43.2-.83.74-.83 1.48v13.5c0 .74.4 1.27.83 1.46h-5.05Zm10.97 0c.55-.25.81-.89.81-1.46v-13.1h-3.63a5.2 5.2 0 0 0-2.56.54l1.13-2.42h12.05c.98 0 1.97-.02 2.92-.22-.46 1.24-1.82 2.15-2.61 2.15-.96-.02-2.54-.08-3.9-.08v13.13c0 .57.28 1.21.81 1.46h-5.02Zm11.32 0c.4-.19.83-.72.83-1.46v-13.5c0-.74-.42-1.27-.83-1.48h5.06c-.43.2-.84.74-.84 1.48v13.5c0 .74.41 1.27.84 1.46h-5.06Zm14.91-3.72c0-3.13-7.37-3.84-7.37-8.83 0-3.1 2.94-4.11 5.53-4.11 1.15 0 2.82.16 3.88.65l.18 3.07a4.4 4.4 0 0 0-3.78-2.34c-1.2 0-2.44.59-2.44 1.95 0 3.25 7.5 4.04 7.5 8.78 0 3.43-3 4.86-6.03 4.86-1.59 0-3.74-.3-5.08-1.22a11.7 11.7 0 0 1 .04-3.7c.83 1.9 2.56 3.4 4.71 3.4 1.64 0 2.86-.72 2.86-2.5Zm15.8 3.72c.36-.16.74-.72.74-1.46v-6.12c-.88-.1-2.1-.14-3.49-.14-1.4 0-2.64.04-3.54.14v6.12c0 .74.37 1.27.74 1.46h-4.87c.36-.16.74-.72.74-1.46v-13.5c0-.74-.38-1.3-.74-1.48h4.87c-.37.18-.74.74-.74 1.48v5.53c.9.1 2.12.14 3.54.14 1.38 0 2.61-.06 3.5-.14V22.3c0-.75-.39-1.3-.75-1.49h4.87c-.37.18-.73.74-.73 1.48v13.5c0 .74.36 1.27.73 1.46h-4.87Zm22.92 0c.16-.16.3-.28.3-.57 0-.1-.04-.26-.16-.57l-1.5-4.1c-1.02-.13-2.08-.13-3.11-.13-.98 0-1.98.03-2.95.13l-1.59 4.02c-.2.5-.26.66-.26.77 0 .25.21.37.39.45H95.7a2.6 2.6 0 0 0 1.12-1.26l5.44-14.04a.5.5 0 0 0 .03-.2c0-.39-.25-.76-.6-.94h4.27l5.53 15.16c.22.61.7 1.05 1.1 1.28h-4.7Zm-4.3-13.3-2.49 6.4c.75.07 1.52.1 2.27.1.86 0 1.71 0 2.55-.1l-2.32-6.4Zm9.85 13.3c.4-.19.83-.72.83-1.46v-13.5c0-.74-.42-1.27-.83-1.48h5.06c-.43.2-.83.74-.83 1.48v13.5c0 .74.4 1.27.83 1.46h-5.06Zm12.74-15.02c-.27 0-.53.05-.82.09v5.68c.27.02.5.05.77.05 1.85 0 3.22-1.02 3.22-3.03 0-2.06-1.36-2.8-3.17-2.8Zm8.7 15.12c-.63 0-1.3.02-1.92-.16-1.12-.33-2.66-2.85-3.28-3.84-.95-1.6-2.19-3.84-4.32-3.84v6.28c0 .55.24 1.21.77 1.46h-4.94c.53-.27.78-.89.78-1.46v-13.5c0-.57-.25-1.19-.78-1.48h5.96c2.58 0 5.81 1 5.81 4.1 0 2.61-2.36 3.95-4.14 3.95 3.55.2 5.68 8.07 9.2 8.07-1.02.3-2.07.42-3.13.42Zm20.52-14.93-5 14.83c-.41 0-.82-.14-1.05-.3-.49-.48-1.27-2.46-1.55-3.2l-2.25-5.7-3.26 9.2h-1.55l-5.59-14.87a2.9 2.9 0 0 0-1.26-1.57h4.86a.78.78 0 0 0-.34.69c0 .17.08.4.14.57l3.64 9.84 3.88-11.1 4.27 10.7 3.23-9.68c.08-.27.13-.36.13-.53 0-.2-.09-.33-.3-.49h3.22c-.59.31-1.02 1-1.22 1.6Zm5.97 1.52-2.5 6.4c.76.08 1.53.1 2.28.1.85 0 1.71 0 2.54-.1l-2.32-6.4Zm4.29 13.31c.17-.16.3-.28.3-.57 0-.1-.05-.26-.15-.57l-1.5-4.1c-1.03-.13-2.08-.13-3.12-.13-.97 0-1.97.03-2.95.13l-1.58 4.02c-.2.5-.26.66-.26.77 0 .25.2.37.38.45h-3.31c.49-.25.9-.76 1.11-1.26l5.46-14.04a.73.73 0 0 0 .03-.2c0-.39-.26-.76-.61-.94h4.27l5.53 15.16c.22.61.71 1.05 1.11 1.28h-4.71Zm14.85-14.71-3.9 6.83v6.42c0 .52.22 1.21.74 1.46h-4.84c.5-.27.72-.96.72-1.46v-6.44l-3.39-5.43c-.3-.5-1.71-2.87-3.43-2.87a10.8 10.8 0 0 1 2.84-.45c1.6 0 2.39.15 3.36 1.68l3.13 4.96 2.75-4.8c.3-.52.5-.9.5-1.08 0-.23-.1-.39-.34-.55h3.49a4.3 4.3 0 0 0-1.63 1.73Zm9.12 11c0-3.14-7.38-3.85-7.38-8.84 0-3.1 2.94-4.11 5.53-4.11 1.15 0 2.81.16 3.88.65l.18 3.07a4.42 4.42 0 0 0-3.78-2.34c-1.2 0-2.44.59-2.44 1.95 0 3.25 7.5 4.04 7.5 8.78 0 3.43-2.98 4.86-6.03 4.86-1.59 0-3.75-.3-5.09-1.22a10.9 10.9 0 0 1 .04-3.7c.83 1.9 2.56 3.4 4.72 3.4 1.64 0 2.87-.72 2.87-2.5Z"/>
    <path id="darker" fill="url(#b)" d="M235.01 9.3c-2.76 2.74-8.75 5.1-11.7 6.2-4.02 1.52-5.8 2.05-8.06 2.79-2.55.82-7.65 2.37-7.65 2.37 10.57 3.15 18.01 4.1 18.01 4.1s3.47-1.07 8.96-4.01c2.98-1.51 4.44-2.53 5.49-3.5a5.32 5.32 0 0 0 1.63-2.72c.02-.1.06-.35.06-.6l-.01-.33c0-.17-.04-.3-.04-.3s-.06-.3-.13-.53a3.7 3.7 0 0 0-.98-1.34c-.37-.3-1-1.05-3.3-1.86a19.5 19.5 0 0 0-2.06-.52l-.22.25Z"/>
    <path d="M241.75 13.86s-.01-.3-.08-.54a2.1 2.1 0 0 0-.3-.66 5.65 5.65 0 0 0-1.72-1.64 12.36 12.36 0 0 0-4.94-1.7c-2.55-.34-5.48-.28-5.76-.3l-8.58.07c-6.94.15-15.44.17-17.66.17-22.98.1-32.99-.4-44.12-2.63a128.78 128.78 0 0 1-14.72-3.66c8.35-.3 57.09-2.32 65.98-2.55 5.82-.17 9.95-.2 13.26 0 1.7.09 3.27.23 5.26.57 1.77.3 3.39.82 4.33 1.17 1.98.73 3.65 1.79 4.47 2.87 0 0 .25.25.58.7.37.51.8 1.15.94 1.39a30.79 30.79 0 0 1 2.57 4.65 4.86 4.86 0 0 1 .48 1.81l.01.28Z"/>
  </ExtendedWrapper>
)

