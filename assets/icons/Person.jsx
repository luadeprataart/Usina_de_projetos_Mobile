import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M14.0003 13.9708C12.717 13.9708 11.667 13.5625 10.8503 12.7458C10.0337 11.9292 9.62533 10.8792 9.62533 9.59583C9.62533 8.3125 10.0337 7.2625 10.8503 6.44583C11.667 5.62917 12.717 5.22083 14.0003 5.22083C15.2837 5.22083 16.3337 5.62917 17.1503 6.44583C17.967 7.2625 18.3753 8.3125 18.3753 9.59583C18.3753 10.8792 17.967 11.9292 17.1503 12.7458C16.3337 13.5625 15.2837 13.9708 14.0003 13.9708ZM4.66699 23.3333V20.5917C4.66699 19.8528 4.85171 19.2208 5.22116 18.6958C5.5906 18.1708 6.06699 17.7722 6.65033 17.5C7.9531 16.9167 9.20241 16.4792 10.3982 16.1875C11.5941 15.8958 12.7948 15.75 14.0003 15.75C15.2059 15.75 16.4017 15.9007 17.5878 16.2021C18.7739 16.5035 20.0184 16.9361 21.3212 17.5C21.9239 17.7722 22.41 18.1708 22.7795 18.6958C23.1489 19.2208 23.3337 19.8528 23.3337 20.5917V23.3333H4.66699ZM6.41699 21.5833H21.5837V20.5917C21.5837 20.2806 21.4913 19.984 21.3066 19.7021C21.1219 19.4201 20.8934 19.2111 20.6212 19.075C19.3767 18.4722 18.2392 18.059 17.2087 17.8354C16.1781 17.6118 15.1087 17.5 14.0003 17.5C12.892 17.5 11.8128 17.6118 10.7628 17.8354C9.71283 18.059 8.57533 18.4722 7.35033 19.075C7.0781 19.2111 6.85449 19.4201 6.67949 19.7021C6.50449 19.984 6.41699 20.2806 6.41699 20.5917V21.5833ZM14.0003 12.2208C14.7587 12.2208 15.3857 11.9729 15.8816 11.4771C16.3774 10.9812 16.6253 10.3542 16.6253 9.59583C16.6253 8.8375 16.3774 8.21042 15.8816 7.71458C15.3857 7.21875 14.7587 6.97083 14.0003 6.97083C13.242 6.97083 12.6149 7.21875 12.1191 7.71458C11.6232 8.21042 11.3753 8.8375 11.3753 9.59583C11.3753 10.3542 11.6232 10.9812 12.1191 11.4771C12.6149 11.9729 13.242 12.2208 14.0003 12.2208Z" fill="#EA5C2B" />

  </Svg>
)

export default SvgComponent