import type { Meta, StoryObj } from '@storybook/vue3'

import AnimeContents from '@/components/pages/views/AnimeContants.vue'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const meta = {
  title: 'pages/views/AnimeContents',
  component: AnimeContents,
  tags: ['autodocs']
} satisfies Meta<typeof AnimeContents>

export default meta

type Story = StoryObj<typeof meta>

// Axios モックを作成
const mock = new MockAdapter(axios)

// モックデータを設定
mock.onGet('http://localhost:8000/anime/?format=json').reply(200, {
  hitnum: 3,
  record: [
    {
      fieldId: 'animation',
      categoryId: 'an-col',
      subcategoryId: 'an207',
      aipId: 'C12499',
      metadata: {
        'rdf:type': ['AnimationTVRegularSeries'],
        'schema:additionalType': ['an'],
        'schema:genre': ['アニメテレビレギュラーシリーズ'],
        'schema:name': ['コードギアス 反逆のルルーシュ'],
        'schema:name xml:lang="ja-Hrkt"': ['コードギアス　ハンギャクノルルーシュ'],
        'schema:contributor': [
          '[ストーリー原案]大河内一楼 ／ [ストーリー原案]谷口悟朗 ／ [シリーズ構成]大河内一楼 ／ [監督]谷口悟朗 ／ [キャラクターデザイン原案]CLAMP ／ [キャラクターデザイン]木村貴宏 ／ [美術監督、美術ボード]菱沼由典 ／ [音楽]中川幸太郎 ／ [音楽]黒石ひとみ'
        ],
        'schema:actor': [
          '【ルルーシュ】福山潤 ／ 【ス ザ ク】櫻井孝宏 ／ 【C.C.】ゆかな ／ 【ナナリー】名塚佳織 ／ 【ミレイ】大原さやか ／ 【シャーリー】折笠富美子 ／ 【リヴァル】杉山紀彰 ／ 【カレン】小清水亜美 ／ 【ニーナ】千葉紗子 ／ 【扇】真殿光昭'
        ]
      }
    },
    {
      fieldId: 'animation',
      categoryId: 'an-col',
      subcategoryId: 'an207',
      aipId: 'C11422',
      metadata: {
        'rdf:type': ['AnimationTVRegularSeries'],
        'schema:additionalType': ['an'],
        'schema:genre': ['アニメテレビレギュラーシリーズ'],
        'schema:name': ['コードギアス 反逆のルルーシュSTAGE24＆25スペシャル'],
        'schema:name xml:lang="ja-Hrkt"': [
          'コードギアス ハンギャクノルルーシュステージ24&25スペシャル'
        ]
      }
    },
    {
      fieldId: 'animation',
      categoryId: 'an-col',
      subcategoryId: 'an207',
      aipId: 'C11718',
      metadata: {
        'rdf:type': ['AnimationTVRegularSeries'],
        'schema:additionalType': ['an'],
        'schema:genre': ['アニメテレビレギュラーシリーズ'],
        'schema:name': ['コードギアス反逆のルルーシュ R2'],
        'schema:name xml:lang="ja-Hrkt"': ['コードギアス　ハンギャクノルルーシュアールツー'],
        'schema:contributor': [
          '[ストーリー原案]大河内一楼 ／ [ストーリー原案]谷口悟朗 ／ [シリーズ構成]大河内一楼 ／ [監督]谷口悟朗 ／ [キャラクターデザイン原案]CLAMP ／ [キャラクターデザイン]木村貴宏 ／ [美術監督、美術デザイン菱沼由典 ／ [美術]美術ボード） ／ [美術デザイン]宮本崇 ／ [美術ボード]大久保知江[9話～] ／ [音楽]中川幸太郎 ／ [音楽]黒石ひとみ'
        ],
        'schema:actor': [
          '【ルルーシュ】福山潤 ／ 【スザク】櫻井孝宏 ／ 【C.C.】ゆかな ／ 【ロロ】水島大宙 ／ 【カレン】小清水亜美 ／ 【ナナリー】名塚佳織 ／ 【ミレイ】大原さやか ／ 【シャーリー】折笠富美子 ／ 【リヴァル】杉山紀彰 ／ 【シュナイゼル】井上倫宏 ／ 【コーネリア】皆川純子 ／ 【ギルフォード】幸野善之 ／ 【ディートハルト】中田譲治 ／ 【扇】真殿光昭 ／ 【藤堂】高田裕司 ／ 【玉城】田中一成 ／ 【南】加瀬康之 ／ 【双葉】折笠富美子 ／ 【朝比奈】私市淳 ／ 【千葉】千葉紗子 ／ 【ラクシ'
        ]
      }
    }
  ]
})

export const Default: Story = {}
