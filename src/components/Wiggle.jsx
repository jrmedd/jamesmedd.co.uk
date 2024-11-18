import styled, { css } from 'styled-components'

const WiggleWrapper = styled.svg(props => css`
  path {
    fill: none;
    stroke: ${props => props.theme.interactive};
  }
`)

export const Wiggle = props => (
  <WiggleWrapper aria-hidden='true' viewBox="0 0 640 10" >
    <path d="M0 9C7.6677 9 0.344821 1 8.01252 1C16.104 1 8.10107 9 16.025 9C23.6927 9 16.3699 1 24.0376 1C31.7053 1 24.3824 9 32.0501 9C36.0563 9 36.0563 7 36.0563 5C36.0563 3 36.8576 1 40.0626 1C47.7303 1 40.4074 9 48.0751 9C55.7428 9 48.4199 1 56.0876 1C64.1791 1 56.1762 9 64.1002 9C71.7679 9 64.445 1 72.1127 1C79.7804 1 72.4575 9 80.1252 9C84.1315 9 84.1315 7 84.1315 5C84.1315 3 84.9327 1 88.1377 1C95.8054 1 88.4825 9 96.1502 9C103.818 9 96.4951 1 104.163 1C112.254 1 104.251 9 112.175 9C119.843 9 112.52 1 120.188 1C127.855 1 120.533 9 128.2 9C132.207 9 132.207 7 132.207 5C132.207 3 133.008 1 136.213 1C143.881 1 136.558 9 144.225 9C151.893 9 144.57 1 152.238 1C160.329 1 152.326 9 160.25 9C167.918 9 160.595 1 168.263 1C175.931 1 168.608 9 176.275 9C180.282 9 180.282 7 180.282 5C180.282 3 181.083 1 184.288 1C191.956 1 184.633 9 192.3 9C199.968 9 192.645 1 200.313 1C208.404 1 200.402 9 208.326 9C215.993 9 208.67 1 216.338 1C224.006 1 216.683 9 224.351 9C228.357 9 228.357 7 228.357 5C228.357 3 229.158 1 232.363 1C240.031 1 232.708 9 240.376 9C248.043 9 240.72 1 248.388 1C256.48 1 248.477 9 256.401 9C264.068 9 256.745 1 264.413 1C272.081 1 264.758 9 272.426 9C276.432 9 276.432 7 276.432 5C276.432 3 277.233 1 280.438 1C288.106 1 280.783 9 288.451 9C296.118 9 288.796 1 296.463 1C304.555 1 296.552 9 304.476 9C312.143 9 304.821 1 312.488 1C320.156 1 312.833 9 320.501 9C324.507 9 324.507 7 324.507 5M323.505 5C323.505 3 324.307 1 327.512 1C335.179 1 327.857 9 335.524 9C343.192 9 335.869 1 343.537 1C351.628 1 343.625 9 351.549 9C359.217 9 351.894 1 359.562 1C367.23 1 359.907 9 367.574 9C371.581 9 371.581 7 371.581 5C371.581 3 372.382 1 375.587 1C383.255 1 375.932 9 383.599 9C391.267 9 383.944 1 391.612 1C399.703 1 391.7 9 399.624 9C407.292 9 399.969 1 407.637 1C415.305 1 407.982 9 415.649 9C419.656 9 419.656 7 419.656 5C419.656 3 420.457 1 423.662 1C431.33 1 424.007 9 431.675 9C439.342 9 432.019 1 439.687 1C447.779 1 439.776 9 447.7 9C455.367 9 448.044 1 455.712 1C463.38 1 456.057 9 463.725 9C467.731 9 467.731 7 467.731 5C467.731 3 468.532 1 471.737 1C479.405 1 472.082 9 479.75 9C487.417 9 480.094 1 487.762 1C495.854 1 487.851 9 495.775 9C503.442 9 496.119 1 503.787 1C511.455 1 504.132 9 511.8 9C515.806 9 515.806 7 515.806 5C515.806 3 516.607 1 519.812 1C527.48 1 520.157 9 527.825 9C535.492 9 528.17 1 535.837 1C543.929 1 535.926 9 543.85 9C551.517 9 544.195 1 551.862 1C559.53 1 552.207 9 559.875 9C563.881 9 563.881 7 563.881 5C563.881 3 564.682 1 567.887 1C575.555 1 568.232 9 575.9 9C583.568 9 576.245 1 583.912 1C592.004 1 584.001 9 591.925 9C599.593 9 592.27 1 599.937 1C607.605 1 600.282 9 607.95 9C611.956 9 611.956 7 611.956 5C611.956 3 612.757 1 615.962 1C623.63 1 616.307 9 623.975 9C631.643 9 624.32 1 631.988 1C640.079 1 632.076 9 640 9"  strokeWidth="2"/>
  </WiggleWrapper>
)
