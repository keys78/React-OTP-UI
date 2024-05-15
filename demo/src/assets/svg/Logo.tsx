interface Props {
  size: string
}

const Logo = ({ size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_636_155)">
        <path
          d="M82.2174 28.8392C81.1536 28.474 80.0812 28.1348 79 27.8218C79.1797 27.0914 79.3464 26.358 79.5 25.6218C81.9348 13.7957 80.3435 4.26528 74.9 1.12615C69.6826 -1.88255 61.1522 1.25659 52.5348 8.75659C51.6855 9.49572 50.8565 10.2566 50.0478 11.0392C49.5058 10.5175 48.9551 10.0073 48.3956 9.50876C39.3609 1.49572 30.3043 -1.8782 24.8696 1.26093C19.6652 4.27832 18.1217 13.2392 20.3043 24.4479C20.5275 25.558 20.7739 26.6624 21.0435 27.7609C19.7696 28.1262 18.5304 28.5131 17.3478 28.9261C6.76087 32.6218 0 38.4044 0 44.4044C0 50.6001 7.26087 56.8175 18.287 60.5783C19.1797 60.8856 20.0812 61.1696 20.9913 61.4305C20.6957 62.6102 20.4348 63.7986 20.2087 64.9957C18.113 76.0088 19.7478 84.7566 24.9478 87.7566C30.313 90.8522 39.3217 87.6696 48.1 80.0001C48.7957 79.3972 49.4913 78.7566 50.187 78.0783C51.0623 78.9276 51.9609 79.7508 52.8826 80.5479C61.387 87.8609 69.7783 90.8088 74.9696 87.8088C80.3391 84.7001 82.0826 75.3044 79.8174 63.874C79.6435 63.0044 79.4435 62.1146 79.2174 61.2044C79.8493 61.0189 80.4696 60.8261 81.0783 60.6261C92.5435 56.8261 100 50.6827 100 44.4044C100 38.3783 93.0217 32.5566 82.2174 28.8392V28.8392ZM55.3478 11.9827C62.7304 5.55659 69.6304 3.02615 72.7826 4.83485C76.1304 6.76528 77.4261 14.5522 75.3217 24.7653C75.1855 25.4319 75.0362 26.0943 74.8739 26.7522C70.4675 25.7534 65.9997 25.0475 61.5 24.6392C58.9216 20.9357 56.0964 17.4103 53.0435 14.087C53.7913 13.3682 54.5565 12.6667 55.3391 11.9827H55.3478ZM29.5217 49.5218C30.429 51.2725 31.3754 52.9972 32.3609 54.6957C33.3667 56.4348 34.413 58.1493 35.5 59.8392C32.4043 59.5045 29.3277 59.0111 26.2826 58.3609C27.1696 55.5044 28.2565 52.5348 29.5261 49.5261L29.5217 49.5218ZM29.5217 39.4783C28.2783 36.5305 27.2174 33.6305 26.3478 30.8262C29.1957 30.187 32.2391 29.6653 35.4087 29.2696C34.3478 30.9218 33.3261 32.603 32.3435 34.3131C31.358 36.0117 30.4159 37.7334 29.5174 39.4783H29.5217ZM31.7913 44.5044C33.1072 41.7653 34.5275 39.0783 36.0522 36.4435C37.5652 33.8059 39.1797 31.2334 40.8957 28.7261C43.8696 28.5001 46.9174 28.3783 50 28.3783C53.0957 28.3783 56.1478 28.5001 59.1217 28.7261C60.8174 31.2334 62.4232 33.7986 63.9391 36.4218C65.4638 39.0479 66.9014 41.7218 68.2522 44.4435C66.9188 47.1914 65.487 49.8899 63.9565 52.5392C62.4406 55.1711 60.8406 57.7508 59.1565 60.2783C56.1913 60.4957 53.1261 60.6001 50 60.6001C46.887 60.6001 43.8609 60.5044 40.9478 60.3131C39.2203 57.7914 37.5913 55.2073 36.0609 52.5609C34.5362 49.9232 33.113 47.2363 31.7913 44.5001V44.5044ZM67.6609 54.6783C68.6638 52.9305 69.629 51.1624 70.5565 49.374C71.827 52.2472 72.9473 55.1845 73.913 58.174C70.8341 58.8649 67.7211 59.3946 64.587 59.7609C65.642 58.0856 66.6652 56.3899 67.6565 54.674L67.6609 54.6783ZM70.513 39.4827C69.5913 37.7319 68.6348 35.9986 67.6435 34.2827C66.6638 32.5957 65.6493 30.929 64.6 29.2827C67.787 29.687 70.8435 30.2218 73.7174 30.8783C72.7947 33.7999 71.7252 36.6731 70.513 39.487V39.4827ZM50.0435 17.1522C52.1242 19.4197 54.089 21.7908 55.9304 24.2566C51.9942 24.0682 48.0551 24.0682 44.113 24.2566C46.0565 21.6914 48.0478 19.3088 50.0478 17.1522H50.0435ZM27.0174 4.95658C30.3652 3.0218 37.7565 5.78267 45.5565 12.7088C46.0565 13.1522 46.5565 13.6131 47.0565 14.0914C43.9859 17.4151 41.1391 20.9388 38.5348 24.6392C34.0483 25.042 29.5926 25.7347 25.1957 26.7131C24.9406 25.6928 24.7116 24.6638 24.5087 23.6262V23.6348C22.6261 14.0261 23.8739 6.78267 27.0174 4.96528V4.95658ZM22.1304 57.3175C21.3043 57.0798 20.4841 56.8232 19.6696 56.5479C15.4322 55.2149 11.4764 53.1132 8 50.3479C7.00517 49.664 6.16122 48.7833 5.52032 47.7603C4.87942 46.7372 4.45521 45.5936 4.27391 44.4001C4.27391 40.7609 9.7 36.1175 18.7522 32.9653C19.8913 32.5653 21.0391 32.203 22.1957 31.8783C23.5388 36.1897 25.1656 40.4076 27.0652 44.5044C25.1415 48.6608 23.4945 52.9396 22.1348 57.3131L22.1304 57.3175ZM45.287 76.7957C42.016 79.796 38.2209 82.1688 34.0913 83.7957C33.0035 84.3172 31.8203 84.6102 30.6149 84.6566C29.4094 84.7029 28.2073 84.5017 27.0826 84.0653C23.9304 82.2392 22.6174 75.2218 24.4043 65.8044C24.6188 64.6885 24.8623 63.5812 25.1348 62.4827C29.5783 63.4361 34.0814 64.0869 38.613 64.4305C41.2385 68.1509 44.1055 71.6947 47.1956 75.0392C46.5754 75.6392 45.9406 76.2233 45.2913 76.7914L45.287 76.7957ZM50.1652 71.9609C48.1391 69.7783 46.1217 67.3609 44.1478 64.7609C46.0609 64.8363 48.0116 64.874 50 64.874C52.0377 64.874 54.0493 64.8305 56.0348 64.7435C54.2028 67.248 52.2437 69.657 50.1652 71.9609V71.9609ZM76.1087 77.9044C76.0166 79.1082 75.6786 80.2803 75.1155 81.3482C74.5523 82.4161 73.7761 83.3572 72.8348 84.1131C69.6826 85.9392 62.9435 83.5653 55.6739 77.3131C54.842 76.6001 54.0043 75.8377 53.1609 75.0261C56.1916 71.6711 58.9921 68.1152 61.5435 64.3827C66.1005 63.9984 70.6257 63.3011 75.087 62.2957C75.2899 63.1189 75.4696 63.9247 75.6261 64.7131C76.5937 69.0451 76.7559 73.5181 76.1043 77.9088L76.1087 77.9044ZM79.7348 56.5696C79.1826 56.7522 78.6217 56.9261 78.0478 57.0914C76.6503 52.7596 74.9594 48.5281 72.987 44.4261C74.8866 40.38 76.5134 36.2113 77.8565 31.9479C78.8739 32.2392 79.8696 32.5566 80.8261 32.8827C90.087 36.0653 95.7304 40.7783 95.7304 44.4044C95.7304 48.274 89.6304 53.2914 79.7304 56.5696H79.7348Z"
          fill="url(#paint0_linear_636_155)"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.8125 38.8333C39.8125 35.6117 42.6107 33 46.0625 33H55.75C59.2018 33 62 35.6117 62 38.8333V48.1667C62 51.3883 59.2018 54 55.75 54H38.25C37.7906 54 37.3683 53.7648 37.1501 53.3876C36.9318 53.0103 36.9529 52.5517 37.2049 52.1932L39.1977 49.3591C39.5988 48.7886 39.8125 48.1212 39.8125 47.4388V38.8333ZM46.0625 35.3333C43.9914 35.3333 42.3125 36.9003 42.3125 38.8333V47.4388C42.3125 48.5761 41.9563 49.6885 41.2878 50.6393L40.5654 51.6667H55.75C57.8211 51.6667 59.5 50.0997 59.5 48.1667V38.8333C59.5 36.9003 57.8211 35.3333 55.75 35.3333H46.0625Z"
        fill="#2A48E7"
      />
      <path
        d="M47.0675 42.278L48.4325 41.771L48.7705 42.616L47.3145 43.175L48.1725 44.605L47.4185 45.086L46.6125 43.799L45.8325 45.086L45.0525 44.605L45.9235 43.175L44.4545 42.616L44.7795 41.771L46.1575 42.278V40.9H47.0675V42.278ZM51.9552 42.278L53.3202 41.771L53.6582 42.616L52.2022 43.175L53.0602 44.605L52.3062 45.086L51.5002 43.799L50.7202 45.086L49.9402 44.605L50.8112 43.175L49.3422 42.616L49.6672 41.771L51.0452 42.278V40.9H51.9552V42.278ZM56.8428 42.278L58.2078 41.771L58.5458 42.616L57.0898 43.175L57.9478 44.605L57.1938 45.086L56.3878 43.799L55.6078 45.086L54.8278 44.605L55.6988 43.175L54.2298 42.616L54.5548 41.771L55.9328 42.278V40.9H56.8428V42.278Z"
        fill="#F61414"
      />
      <defs>
        <linearGradient
          id="paint0_linear_636_155"
          x1="50"
          y1="-0.00585938"
          x2="50"
          y2="88.9704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D40BF5" />
          <stop offset="1" stop-color="#032705" />
        </linearGradient>
        <clipPath id="clip0_636_155">
          <rect width="100" height="88.9716" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Logo
