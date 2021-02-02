 <template>
 <div class="q-pa-md editmenustyle mt30">
        <div class="q-gutter-y-md" style="">
          <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey bgw"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="matchabowl" label="茶碗" />
          <q-tab name="matcha" label="抹茶" />
          <q-tab name="dessert" label="スイーツ" />
          <q-tab name="chagu" label="茶具" />
          <q-tab name="others" label="Others" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="matchabowl">
            <div class="row"><matchabowlcardedit></matchabowlcardedit></div>
          </q-tab-panel>

          <q-tab-panel name="matcha">
            <div class="row"><matchacardedit></matchacardedit></div>
          </q-tab-panel>

          <q-tab-panel name="dessert">
           <div class="row"><Dessertcardedit></Dessertcardedit></div>
          </q-tab-panel>

           <q-tab-panel name="chagu">
           <div class="row"><chagucardedit></chagucardedit></div>
          </q-tab-panel>

           <q-tab-panel name="others">
            <div class="row"><otherscardedit></otherscardedit></div>
            </q-tab-panel>
        </q-tab-panels>
      </q-card>
</div>
</div>
</template>
<script>
import matchabowlcardedit from '../components/matchabowlcardedit.vue'
import matchacardedit from '../components/matchacardedit.vue'
import Dessertcardedit from '../components/Dessertcardedit.vue'
import chagucardedit from '../components/chagucardedit.vue'
import otherscardedit from '../components/Othersedit.vue'
export default {
  components: { matchabowlcardedit, matchacardedit, Dessertcardedit, chagucardedit, otherscardedit },
  data () {
    return {
      tab: 'matchabowl',
      splitterModel: 20,
      matchabowlcardedit,
      matchacardedit,
      Dessertcardedit,
      chagucardedit,
      otherscardedit
    }
  }
}
</script>
<style scoped>
.bgw{
  background: white;
}
.mt30{
  margin-top: 30px;
}
  .editmenustyle{
  width: 92%;
  margin-left: 5%;
}
.q-card .q-tabs {
  height: 64px;
}
.q-card{
  /* background: chocolate; */
  box-shadow: 0 0 0 0;
  /* border: 1px solid rgb(230, 230, 230); */
}
.q-card .q-tabs--dense .q-tab{
  min-height: 60px;
}
@media (max-width: 599px) {
  .box{
    display: flex;
    flex-direction: column;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 95%;
  /* height: 290px; */
  max-width: 100%;
  height: 20%;
  /* height: 300px; */
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  /* background: chartreuse; */
}
}
@media screen and (min-width: 600px) and (max-width: 899px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 40%;
  height: 20%;
  display: flex;
  padding-bottom: 5px;
  background: chartreuse;
}
}
@media screen and (min-width: 900px) and (max-width: 1110px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     justify-content: start;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 30%;
  height: 25%;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  background: chartreuse;
}
}
@media screen and (min-width: 1111px) and (max-width: 1300px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 23%;
  height: 30%;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  background: chartreuse;
}
}
</style>
