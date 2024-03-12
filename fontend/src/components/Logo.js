import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={PRIMARY_MAIN} stroke="none">
          <path d="M2305 4495 c-231 -43 -444 -201 -543 -402 l-26 -53 -91 0 c-109 0
-169 -24 -228 -90 -69 -75 -71 -87 -75 -362 -3 -220 -6 -248 -21 -253 -9 -2
-159 -148 -333 -322 -211 -212 -322 -330 -333 -355 -43 -105 11 -245 115 -298
51 -25 104 -32 151 -20 l42 12 79 -78 78 -79 -79 -80 c-96 -98 -115 -132 -108
-194 l6 -46 -414 -415 c-386 -388 -414 -419 -430 -469 -59 -182 73 -364 263
-364 120 0 122 2 572 449 l405 403 51 0 c68 -1 84 8 181 104 l83 82 79 -79
c71 -71 78 -81 70 -103 -46 -121 58 -276 200 -299 87 -14 123 7 277 158 l140
138 127 0 126 0 -15 -52 c-8 -29 -36 -96 -62 -148 l-47 -95 -140 -6 c-172 -8
-232 -27 -341 -110 -91 -70 -162 -192 -179 -312 -9 -60 7 -102 49 -125 29 -16
122 -17 1216 -20 652 -2 1209 0 1239 3 107 13 134 78 91 216 -48 157 -160 269
-323 324 -64 21 -94 25 -196 25 l-120 0 -36 64 c-34 61 -85 195 -85 223 0 11
98 13 538 13 625 0 613 -1 699 84 89 89 84 9 81 1222 l-3 1059 -29 53 c-17 30
-47 67 -67 83 -77 61 -43 59 -953 59 l-832 0 -26 53 c-144 294 -492 464 -823
402z m269 -160 c216 -46 396 -217 462 -441 22 -72 24 -217 5 -294 -56 -226
-226 -398 -451 -456 -90 -23 -260 -15 -349 16 -84 30 -200 108 -255 173 -104
122 -150 249 -150 407 0 90 5 117 30 190 38 107 88 183 170 259 146 133 344
187 538 146z m-897 -527 c-18 -138 25 -330 104 -465 48 -81 189 -221 274 -271
39 -22 106 -53 150 -69 75 -26 90 -28 240 -28 150 0 165 2 240 28 265 93 461
315 516 585 10 47 17 62 30 62 10 0 21 -5 25 -11 4 -6 62 -300 129 -653 l123
-641 -38 -41 c-100 -108 -70 -267 62 -335 50 -25 136 -25 187 0 38 20 101 83
101 101 0 6 76 10 195 10 119 0 195 -4 195 -10 0 -5 14 -25 32 -45 89 -102
242 -102 326 0 89 109 56 262 -71 326 -46 24 -129 27 -178 6 -38 -16 -96 -70
-105 -99 -5 -17 -20 -18 -200 -18 -122 0 -194 4 -194 10 0 21 -72 89 -115 109
-31 15 -45 27 -45 41 0 20 7 20 385 20 301 0 393 3 418 14 40 16 91 74 106
118 16 51 151 686 151 712 0 12 -12 33 -26 47 l-26 24 -593 3 -594 2 -10 53
c-6 28 -21 107 -35 175 -17 85 -32 136 -50 162 -28 42 -95 80 -143 80 -28 0
-31 3 -35 35 l-4 35 803 0 803 0 32 -29 33 -29 3 -1046 c2 -923 0 -1050 -13
-1076 -33 -63 35 -60 -1181 -60 l-1108 0 107 108 c115 117 137 154 137 232 0
147 -138 261 -278 229 l-46 -10 -422 422 c-390 390 -422 424 -413 446 34 91
-25 224 -122 274 l-39 19 0 203 c0 111 5 219 10 239 16 55 51 78 120 78 l56 0
-9 -72z m-192 -623 c53 -52 51 -53 -283 -387 -169 -170 -315 -308 -324 -308
-9 0 -30 12 -47 26 -60 50 -60 49 276 386 226 226 314 308 331 308 13 0 34
-11 47 -25z m2259 -67 c4 -35 9 -84 13 -110 l6 -48 -105 0 -105 0 -20 103
c-11 56 -18 105 -16 110 2 4 53 7 112 7 l108 0 7 -62z m417 57 c4 -3 -15 -197
-20 -212 -1 -2 -50 -3 -110 -3 l-108 0 -7 63 c-4 34 -9 83 -13 110 l-6 47 130
0 c71 0 132 -2 134 -5z m379 -2 c0 -5 -10 -54 -22 -110 l-21 -103 -97 0 -96 0
12 108 c7 59 13 108 14 110 1 6 210 1 210 -5z m-2575 -673 l410 -410 -225
-225 c-124 -124 -229 -225 -235 -225 -5 0 -193 183 -417 407 l-408 408 227
227 c126 126 230 228 233 228 3 0 190 -184 415 -410z m1818 263 c3 -21 9 -71
13 -111 l7 -73 -89 3 -88 3 -18 85 c-28 139 -34 130 76 130 l93 0 6 -37z m333
-50 c-11 -140 -7 -133 -86 -133 l-67 0 -7 73 c-4 39 -10 89 -13 110 l-6 37 93
0 93 0 -7 -87z m344 82 c0 -11 -40 -182 -46 -198 -5 -14 -20 -17 -81 -17 -66
0 -74 2 -69 18 2 9 8 55 11 102 4 47 9 88 12 93 5 8 173 10 173 2z m-788 -611
c18 -40 -4 -74 -46 -74 -41 0 -61 27 -52 66 12 46 79 51 98 8z m776 8 c28 -36
2 -82 -48 -82 -53 0 -68 73 -21 96 27 14 50 9 69 -14z m-2986 -484 l-72 -73
-150 150 -150 150 72 72 73 73 150 -150 150 -150 -73 -72z m1157 337 c16 -8
31 -22 35 -30 20 -54 14 -61 -297 -372 -328 -329 -331 -330 -382 -278 -52 51
-50 54 273 378 251 252 314 311 340 316 2 1 16 -6 31 -14z m-1799 -850 c-317
-318 -402 -397 -432 -405 -87 -24 -166 56 -143 147 4 19 139 161 403 426 l397
397 85 -85 85 -85 -395 -395z m2749 223 c11 -53 26 -98 78 -225 4 -10 -91 -13
-456 -13 -254 0 -461 2 -461 4 0 2 13 32 29 67 27 59 49 129 65 202 l6 27 363
0 363 0 13 -62z m572 -426 c26 -13 65 -39 88 -59 40 -34 101 -125 101 -150 0
-10 -235 -13 -1141 -13 l-1140 0 6 23 c13 41 67 117 107 148 22 18 65 42 96
55 l57 24 890 -3 890 -2 46 -23z"/>
          <path d="M2413 4235 c-34 -15 -53 -56 -53 -116 0 -30 -4 -39 -21 -44 -12 -4
-42 -25 -66 -48 -69 -64 -89 -166 -48 -247 32 -62 92 -96 215 -124 57 -13 90
-34 90 -57 0 -3 -9 -18 -21 -33 -16 -21 -29 -26 -64 -26 -35 0 -48 5 -64 26
-12 15 -21 35 -21 46 0 53 -58 90 -106 66 -92 -43 -50 -208 67 -268 34 -18 36
-23 42 -77 5 -46 11 -63 32 -80 33 -29 65 -29 99 -2 23 18 26 28 26 79 0 55 1
58 31 71 114 47 166 187 110 296 -32 64 -71 85 -233 128 -64 17 -80 40 -54 80
21 32 74 42 114 21 31 -16 42 -34 42 -70 0 -57 88 -87 127 -43 30 33 34 52 22
109 -13 58 -62 119 -121 149 -36 19 -38 21 -38 70 0 28 -4 59 -10 69 -15 28
-61 40 -97 25z"/>
          <path d="M2296 2799 c-35 -28 -36 -80 -1 -114 l24 -25 419 0 c403 0 420 1 445
20 13 11 28 31 31 45 7 29 -15 79 -39 89 -9 3 -205 6 -434 6 -408 0 -419 -1
-445 -21z"/>
          <path d="M2527 2498 c-38 -34 -40 -85 -5 -118 19 -17 35 -20 124 -20 87 0 105
3 128 21 32 25 35 75 7 110 -18 22 -28 24 -124 27 -97 4 -106 2 -130 -20z"/>
          <path d="M2954 2508 c-47 -22 -56 -86 -19 -123 22 -23 31 -25 128 -25 118 0
142 11 153 67 5 27 1 37 -24 63 -30 29 -33 30 -124 29 -51 0 -103 -5 -114 -11z"/>
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
