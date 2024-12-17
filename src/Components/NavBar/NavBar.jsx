import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="SVG_box">
            <svg
              className="SVG"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1604 231">
              <path d="M0 0 C25.74 0 51.48 0 78 0 C86.99229748 14.6124834 86.99229748 14.6124834 89.82421875 19.8046875 C90.7680542 21.52703613 90.7680542 21.52703613 91.73095703 23.28417969 C92.04985901 23.86953491 92.36876099 24.45489014 92.69732666 25.0579834 C94.42745826 28.23285968 96.16934887 31.4012811 97.91015625 34.5703125 C98.2583844 35.20477295 98.60661255 35.8392334 98.96539307 36.49291992 C102.14026375 42.27083767 105.37160632 48.01593765 108.625 53.75 C113.10821763 61.65292603 117.56607212 69.56930286 122 77.5 C127.30560864 86.98880547 132.64097353 96.46033308 138.00195312 105.91796875 C138.51306641 106.8203125 139.02417969 107.72265625 139.55078125 108.65234375 C140.00106689 109.44632568 140.45135254 110.24030762 140.9152832 111.05834961 C141.64018326 112.3559256 142.33529201 113.67058402 143 115 C143.17115688 94.54724686 142.69717186 74.14291562 142.07287598 53.70220947 C141.87894315 47.34286937 141.68985848 40.98339176 141.50436401 34.62380028 C141.4221011 31.84267975 141.33542683 29.06170427 141.24745178 26.28075886 C141.00194942 17.50205118 141 8.79652845 141 0 C165.75 0 190.5 0 216 0 C216 75.9 216 151.8 216 230 C188.94 230 161.88 230 134 230 C130.7 224.06 127.4 218.12 124 212 C121.78516757 208.15668678 119.56275608 204.32212614 117.3125 200.5 C116.11011406 198.44824651 114.90831192 196.39615081 113.70703125 194.34375 C113.09811035 193.30347656 112.48918945 192.26320312 111.86181641 191.19140625 C108.72025957 185.80635104 105.61080884 180.40285634 102.5 175 C97.56004024 166.42675468 92.60621169 157.86185237 87.625 149.3125 C87.09068359 148.39404297 86.55636719 147.47558594 86.00585938 146.52929688 C81.4060687 138.64474771 76.70772228 130.82038086 72 123 C72.03758423 124.25857315 72.03758423 124.25857315 72.07592773 125.54257202 C72.31639986 133.62572092 72.55186315 141.70899907 72.78230286 149.79244041 C72.90080715 153.94373848 73.02095638 158.09497237 73.14550781 162.24609375 C73.26663811 166.28557222 73.38261117 170.32517417 73.49563599 174.36488724 C73.53858781 175.87193297 73.5831112 177.37893518 73.62960815 178.8858757 C74.15292427 195.9302756 74 212.93411845 74 230 C49.58 230 25.16 230 0 230 C0 154.1 0 78.2 0 0 Z " fill="#000000" transform="translate(692,1)" />
              <path d="M0 0 C27.72 0 55.44 0 84 0 C93.91878395 25.25420879 103.8301459 50.5100226 113.625 75.8125 C121.62206261 96.46974958 129.68045577 117.10245987 137.76077271 137.7272644 C142.20734145 149.07889096 146.63993063 160.43597586 151.06713867 171.79516602 C154.17004268 179.75534559 157.27789551 187.71349024 160.40158081 195.6655426 C161.90675721 199.49799619 163.40949265 203.33140477 164.91204834 207.16488647 C165.63303521 209.00230077 166.35522948 210.83924179 167.07867432 212.6756897 C168.07630868 215.20839895 169.0698479 217.74267849 170.0625 220.27734375 C170.361633 221.03355011 170.66076599 221.78975647 170.96896362 222.56887817 C173 227.77226503 173 227.77226503 173 230 C144.95 230 116.9 230 88 230 C82.14746208 215.95390898 82.14746208 215.95390898 79.6875 208.9375 C79.42388672 208.20595703 79.16027344 207.47441406 78.88867188 206.72070312 C77.81968879 203.69145496 77 201.23670983 77 198 C52.58 198 28.16 198 3 198 C2.34 200.97 1.68 203.94 1 207 C-1.64 214.59 -4.28 222.18 -7 230 C-34.39 230 -61.78 230 -90 230 C-86.62485956 219.87457867 -86.62485956 219.87457867 -85.24511719 216.35864258 C-84.93276123 215.55943893 -84.62040527 214.76023529 -84.29858398 213.93681335 C-83.96802002 213.09786026 -83.63745605 212.25890717 -83.296875 211.39453125 C-82.94278564 210.49060135 -82.58869629 209.58667145 -82.22387695 208.65534973 C-81.06816814 205.7068448 -79.90914521 202.75965549 -78.75 199.8125 C-77.93246059 197.72906535 -77.11507997 195.64556838 -76.29785156 193.56201172 C-70.87217341 179.73561926 -65.4239733 165.91810462 -59.96337891 152.10546875 C-54.80817238 139.06287313 -49.68011205 126.0096802 -44.55508423 112.9552002 C-36.80797128 93.22181018 -29.04774214 73.49379011 -21.24462891 53.7824707 C-14.14975037 35.86020699 -7.07734218 17.92926685 0 0 Z M40 84 C37.57475392 91.22516451 35.15414935 98.45187166 32.73681641 105.6796875 C31.91334979 108.14000939 31.08880819 110.59997175 30.26318359 113.05957031 C29.07889745 116.58825963 27.89844164 120.11820994 26.71875 123.6484375 C26.34689575 124.75367767 25.9750415 125.85891785 25.59191895 126.99765015 C25.25156616 128.01855743 24.91121338 129.03946472 24.56054688 130.09130859 C24.2585437 130.99287689 23.95654053 131.89444519 23.64538574 132.82333374 C22.90524348 134.94119312 22.90524348 134.94119312 23 137 C34.55 137 46.1 137 58 137 C56.53859013 129.30923364 56.53859013 129.30923364 54.48779297 121.91748047 C54.2076535 121.05734344 53.92751404 120.19720642 53.6388855 119.31100464 C53.34297516 118.42204498 53.04706482 117.53308533 52.7421875 116.6171875 C52.43427277 115.67690704 52.12635803 114.73662659 51.80911255 113.76785278 C50.83645159 110.80176943 49.85587629 107.8383754 48.875 104.875 C48.2091076 102.84913175 47.54373811 100.82309154 46.87890625 98.796875 C45.2586373 93.86257651 43.63127127 88.93067152 42 84 C41.34 84 40.68 84 40 84 Z " fill="#000000" transform="translate(503,1)" />
              <path d="M0 0 C29.04 0 58.08 0 88 0 C90.39142 7.772115 92.74120364 15.48542701 94.8215332 23.3347168 C95.07421967 24.27996216 95.32690613 25.22520752 95.58724976 26.19909668 C96.41074346 29.28185786 97.23077799 32.36552749 98.05078125 35.44921875 C98.63341783 37.63285695 99.21628265 39.81643426 99.79936218 41.99995422 C101.32933793 47.73169529 102.85641792 53.46420377 104.3828125 59.19689941 C105.91441525 64.94744836 107.44844493 70.69734963 108.98242188 76.44726562 C109.58267923 78.69735528 110.18292953 80.94744682 110.78317261 83.19754028 C111.0761813 84.2959235 111.36918999 85.39430672 111.67107773 86.52597427 C112.54296224 89.79490317 113.41449015 93.06392695 114.28591919 96.33297729 C118.16808451 110.89475234 122.06465785 125.45248971 126 140 C127.95964191 136.51909804 128.87242633 133.01551224 129.84082031 129.15087891 C130.01395909 128.46549419 130.18709787 127.78010948 130.36548328 127.07395554 C130.9406997 124.79255769 131.50935092 122.50957423 132.078125 120.2265625 C132.48542491 118.60662697 132.89318512 116.98680711 133.30137634 115.36709595 C134.17048736 111.91531503 135.0369201 108.46287775 135.9012146 105.0098877 C137.92772083 96.91489796 139.96850098 88.82350333 142.00861168 80.73193359 C142.46473102 78.92260835 142.92068459 77.1132413 143.37647438 75.30383301 C147.58356681 58.60262389 151.85781226 41.91985492 156.1875 25.25 C156.48281616 24.11089172 156.77813232 22.97178345 157.08239746 21.79815674 C157.90113929 18.6411007 158.72156701 15.48448991 159.54296875 12.328125 C159.78055405 11.41318268 160.01813934 10.49824036 160.26292419 9.55557251 C160.5875338 8.31231705 160.5875338 8.31231705 160.91870117 7.04394531 C161.10486496 6.32958313 161.29102875 5.61522095 161.48283386 4.87921143 C161.93476372 3.23704714 162.46139587 1.6158124 163 0 C192.04 0 221.08 0 251 0 C249.87491578 6.75050534 249.87491578 6.75050534 248.73510742 9.93920898 C248.47858902 10.66440735 248.22207062 11.38960571 247.95777893 12.13677979 C247.67651657 12.91535339 247.39525421 13.693927 247.10546875 14.49609375 C246.80652206 15.33581726 246.50757538 16.17554077 246.1995697 17.04071045 C245.20068641 19.84150678 244.19423379 22.63951678 243.1875 25.4375 C242.47157203 27.43846121 241.75592096 29.43952151 241.04052734 31.44067383 C234.61747068 49.38063525 228.09815022 67.28591832 221.57373047 85.18920898 C215.95295875 100.61411894 210.36654539 116.05094191 204.8125 131.5 C203.33991355 135.59507718 201.86723428 139.69012099 200.39453125 143.78515625 C200.03343262 144.78928558 199.67233398 145.79341492 199.30029297 146.82797241 C195.56691269 157.20768961 191.82506371 167.58433831 188.07626343 177.95849609 C187.37991719 179.88592214 186.68394869 181.81348473 185.98843384 183.74121094 C180.41259306 199.19411171 174.70607469 214.59359833 169 230 C139.96 230 110.92 230 81 230 C77.9924893 222.78197431 75.08890336 215.71945299 72.57421875 208.34765625 C72.27017624 207.46738266 71.96613373 206.58710907 71.65287781 205.68016052 C71.0012261 203.79284235 70.35116138 201.90497558 69.70257568 200.01660156 C67.93185747 194.86340803 66.14709775 189.7150774 64.36328125 184.56640625 C63.99738892 183.50962677 63.63149658 182.45284729 63.2545166 181.36404419 C59.68168324 171.05682895 56.03872252 160.77520061 52.375 150.5 C51.72411777 148.67366655 51.07323892 146.84733189 50.42236328 145.02099609 C49.39938391 142.15091879 48.37629192 139.28088182 47.35290527 136.41094971 C42.81241632 123.67500989 38.29308747 110.93155299 33.77241898 98.18856812 C33.06488158 96.19421302 32.35726801 94.19988498 31.64962769 92.20556641 C24.54696364 72.18827986 17.45155282 52.16842985 10.36547852 32.14526367 C10.04073044 31.22798996 9.71598236 30.31071625 9.38139343 29.36564636 C8.76208521 27.61570058 8.14333739 25.86555634 7.52522278 24.1151886 C6.17771955 20.30325436 4.82073271 16.49568092 3.43017578 12.69921875 C3.19242935 12.04671143 2.95468292 11.3942041 2.70973206 10.72192383 C2.08773137 9.01894563 1.46025471 7.31797014 0.83227539 5.6171875 C0 3 0 3 0 0 Z " fill="#000000" transform="translate(182,1)" />
              <path d="M0 0 C52.47 0 104.94 0 159 0 C159 21.45 159 42.9 159 65 C130.95 65 102.9 65 74 65 C74 71.27 74 77.54 74 84 C100.4 84 126.8 84 154 84 C154 104.13 154 124.26 154 145 C127.6 145 101.2 145 74 145 C74 151.93 74 158.86 74 166 C104.03 166 134.06 166 165 166 C165 187.12 165 208.24 165 230 C110.55 230 56.1 230 0 230 C0 154.1 0 78.2 0 0 Z " fill="#000000" transform="translate(1439,1)" />
              <path d="M0 0 C15.84 0 31.68 0 48 0 C48 4.9805808 47.99914747 9.00554143 47.265625 13.7734375 C47.10545898 14.83393311 46.94529297 15.89442871 46.78027344 16.98706055 C46.51778809 18.66409058 46.51778809 18.66409058 46.25 20.375 C45.98364746 22.1226062 45.98364746 22.1226062 45.71191406 23.90551758 C45.14684171 27.60455666 44.57354569 31.30226625 44 35 C43.61403865 37.51684362 43.22861612 40.03376992 42.84375 42.55078125 C41.90206924 48.70149576 40.95301404 54.85103174 40 61 C43.96 61 47.92 61 52 61 C52.20157715 59.54295654 52.4031543 58.08591309 52.61083984 56.5847168 C53.36517085 51.13679906 54.12257062 45.68931151 54.88085938 40.24194336 C55.20753263 37.89212327 55.53339308 35.54219003 55.85839844 33.19213867 C56.32789659 29.79835834 56.80039558 26.40500673 57.2734375 23.01171875 C57.41623138 21.97480392 57.55902527 20.9378891 57.70614624 19.86955261 C57.91613754 18.36924248 57.91613754 18.36924248 58.13037109 16.83862305 C58.31024063 15.54289619 58.31024063 15.54289619 58.4937439 14.22099304 C59.2411073 9.46598405 60.13895575 4.73574338 61 0 C76.84 0 92.68 0 109 0 C108.33523546 7.97717442 107.55331764 15.77729266 106.37109375 23.671875 C106.21713638 24.72030579 106.06317902 25.76873657 105.90455627 26.84893799 C105.41902848 30.14981808 104.92836074 33.4499092 104.4375 36.75 C104.10447524 39.00776201 103.77178995 41.26557412 103.43945312 43.5234375 C102.63084677 49.01631461 101.81527164 54.50809185 101 60 C108.92 60.33 116.84 60.66 125 61 C125 75.52 125 90.04 125 105 C114.77 105 104.54 105 94 105 C93.67 108.96 93.34 112.92 93 117 C92.34 119.97 91.68 122.94 91 126 C99.25 126 107.5 126 116 126 C116 140.85 116 155.7 116 171 C105.77 171 95.54 171 85 171 C84.67 174.96 84.34 178.92 84 183 C83.4902752 186.82696838 82.95540751 190.63808004 82.37109375 194.453125 C82.23449341 195.36497559 82.09789307 196.27682617 81.95715332 197.21630859 C81.45487034 200.56151604 80.94581015 203.90570309 80.4375 207.25 C79.303125 214.7575 78.16875 222.265 77 230 C61.16 230 45.32 230 29 230 C29.59566349 221.66071121 30.19970177 213.53763334 31.375 205.296875 C31.50438965 204.36699768 31.6337793 203.43712036 31.76708984 202.47906494 C32.0371246 200.54643532 32.30942613 198.61412109 32.58398438 196.68212891 C33.00500611 193.71471634 33.41702272 190.74614517 33.828125 187.77734375 C34.09322494 185.88794709 34.35883077 183.99862132 34.625 182.109375 C34.74794434 181.22304382 34.87088867 180.33671265 34.99755859 179.42352295 C35.11437988 178.60796936 35.23120117 177.79241577 35.3515625 176.95214844 C35.50359131 175.876315 35.50359131 175.876315 35.65869141 174.77874756 C36 173 36 173 37 171 C33.04 171.33 29.08 171.66 25 172 C24.76289307 173.65040283 24.52578613 175.30080566 24.28149414 177.0012207 C23.40277219 183.11246443 22.520422 189.22317968 21.63696289 195.33374023 C21.25447223 197.98068942 20.87335903 200.62783156 20.4934082 203.27514648 C19.94741587 207.07573722 19.39788932 210.87580246 18.84765625 214.67578125 C18.59291283 216.45714226 18.59291283 216.45714226 18.33302307 218.27449036 C18.17293259 219.37540512 18.0128421 220.47631989 17.84790039 221.6105957 C17.70800186 222.58100296 17.56810333 223.55141022 17.42396545 224.55122375 C17 227 17 227 16 230 C0.16 230 -15.68 230 -32 230 C-29.70145603 209.31310428 -29.70145603 209.31310428 -28.4921875 201.2734375 C-28.36184113 200.38886871 -28.23149475 199.50429993 -28.09719849 198.59292603 C-27.69279571 195.85316337 -27.28401355 193.11407766 -26.875 190.375 C-26.5947566 188.48181455 -26.31480723 186.58858555 -26.03515625 184.6953125 C-25.36067785 180.12961257 -24.68023688 175.56486004 -24 171 C-31.92 171 -39.84 171 -48 171 C-48 156.15 -48 141.3 -48 126 C-37.77 126 -27.54 126 -17 126 C-16.67 121.71 -16.34 117.42 -16 113 C-15.67 110.69 -15.34 108.38 -15 106 C-22.92 105.67 -30.84 105.34 -39 105 C-39 90.48 -39 75.96 -39 61 C-28.77 61 -18.54 61 -8 61 C-7.67 56.71 -7.34 52.42 -7 48 C-6.5725796 44.4066754 -6.12394821 40.8287896 -5.625 37.24609375 C-5.49561035 36.29734879 -5.3662207 35.34860382 -5.23291016 34.37110901 C-4.96242991 32.39388498 -4.69012315 30.41690998 -4.41601562 28.44018555 C-3.99663593 25.41321908 -3.58383894 22.38540565 -3.171875 19.35742188 C-2.9066327 17.42442661 -2.64102124 15.49148197 -2.375 13.55859375 C-2.25205566 12.65757431 -2.12911133 11.75655487 -2.00244141 10.82823181 C-1.82720947 9.57025536 -1.82720947 9.57025536 -1.6484375 8.28686523 C-1.54708496 7.55330307 -1.44573242 6.81974091 -1.34130859 6.06394958 C-1.00355759 4.02151336 -0.50209101 2.00836404 0 0 Z M33 105 C32.6616656 107.37438249 32.32920998 109.74934959 32 112.125 C31.90460938 112.79015625 31.80921875 113.4553125 31.7109375 114.140625 C31.15534819 118.18849 31 121.87520387 31 126 C34.96 126 38.92 126 43 126 C43.50567729 123.43850372 44.00470132 120.87600535 44.5 118.3125 C44.64308594 117.59126953 44.78617188 116.87003906 44.93359375 116.12695312 C45.13662109 115.06831055 45.13662109 115.06831055 45.34375 113.98828125 C45.46943359 113.34415283 45.59511719 112.70002441 45.72460938 112.03637695 C46.11167971 109.51666964 46.11167971 109.51666964 46 105 C41.71 105 37.42 105 33 105 Z " fill="#000000" transform="translate(48,1)" />
              <path d="M0 0 C51.48 0 102.96 0 156 0 C156 21.78 156 43.56 156 66 C129.6 66 103.2 66 76 66 C76 73.59 76 81.18 76 89 C99.43 89 122.86 89 147 89 C147 110.12 147 131.24 147 153 C123.9 153 100.8 153 77 153 C77 178.41 77 203.82 77 230 C51.59 230 26.18 230 0 230 C0 154.1 0 78.2 0 0 Z " fill="#000000" transform="translate(1250,1)" />
              <path d="M0 0 C26.07 0 52.14 0 79 0 C79 54.12 79 108.24 79 164 C104.08 164 129.16 164 155 164 C155 185.78 155 207.56 155 230 C103.85 230 52.7 230 0 230 C0 154.1 0 78.2 0 0 Z " fill="#000000" transform="translate(950,1)" />
              <path d="M0 0 C26.07 0 52.14 0 79 0 C79 75.9 79 151.8 79 230 C52.93 230 26.86 230 0 230 C0 154.1 0 78.2 0 0 Z " fill="#000000" transform="translate(1128,1)" />
            </svg>
          </div>
          <div className="link_box">
            <Link
              className="nav__link"
              style={{ marginRight: "1.5rem" }}
              nav_link
              to="/about">
              About
            </Link>
            <Link className="nav__link" nav_link to="/">
              Vans
            </Link>
          </div>
        </nav>
      </div>
      
    </>
  );
}

export default NavBar;
