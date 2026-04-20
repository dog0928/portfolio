import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Database,
  FolderKanban,
  Server,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { ProjectCard } from "@/components/project-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HashScrollLink } from "@/components/hash-scroll-link";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Milestones", href: "#milestones" },
] as const;

const highlightedProjects = [
  {
    name: "Boostudy",
    description:
      "学生から社会人までが使える学習支援アプリ。フロントとバックエンドをまたいで、学習体験を一つのプロダクトに統合。",
    href: "https://boostudy.app",
    stack: ["React", "Flask", "Hono", "PostgreSQL", "Supabase", "Docker", "OpenAI API"],
    tone:
      "bg-[linear-gradient(140deg,rgba(14,165,233,0.18)_0%,rgba(34,211,238,0.11)_42%,rgba(248,252,255,0.76)_100%)]",
  },
  {
    name: "ZenClear",
    description:
      "レポートを溜め込まないためのスケジュール管理 Chrome 拡張。小さな不便を行動設計で解決するプロダクト。",
    href: "https://github.com/dog0928/zen_clear",
    stack: ["JavaScript", "Chrome Extension"],
    tone:
      "bg-[linear-gradient(140deg,rgba(245,158,11,0.18)_0%,rgba(251,146,60,0.11)_42%,rgba(255,250,244,0.76)_100%)]",
  },
  {
    name: "ConneLab Portfolio",
    description:
      "チームやコミュニティの魅力が伝わる見せ方を意識して制作したポートフォリオサイト。",
    href: "https://www.connelab.jp",
    stack: ["Web Design", "Frontend"],
    tone:
      "bg-[linear-gradient(140deg,rgba(16,185,129,0.18)_0%,rgba(20,184,166,0.1)_42%,rgba(244,254,249,0.76)_100%)]",
  },
  {
    name: "Portfolio",
    description:
      "Next.js / Tailwind CSS / Shadcn を軸に、自分の制作姿勢と開発領域が一目で伝わるよう再構成した個人サイト。",
    href: "#top",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    tone:
      "bg-[linear-gradient(140deg,rgba(217,70,239,0.18)_0%,rgba(236,72,153,0.1)_42%,rgba(255,246,250,0.76)_100%)]",
  },
];

const skillGroups = [
  {
    icon: Boxes,
    title: "Frontend",
    description: "小学生の時にHTMLを触り、中学生以降からはReactを用いて開発をしています。",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Chakra UI",
      "shadcn/ui",
      "Next.js",
      "Vite",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "基本はHonoを使用し、共同開発時にFlaskなどを使用してきました。",
    items: ["TypeScript", "JavaScript", "Go", "Hono", "Express", "Next.js", "Flask", "Gin"],
  },
  {
    icon: Database,
    title: "Database",
    description: "現在はPostgreSQLを中心に、プロジェクトに用いています。",
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "普段から使用しているツールです。",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Supabase",
      "Proxmox VE",
      "PufferPanel",
      "Auth0",
      "Neovim",
      "Canva",
      "Adobe",
      "OpenAI API",
    ],
  },
];

const milestones = [
  {
    year: "2026",
    entries: [
      "「Boostudy」リリース",
      "流しそうめん同好会会長就任",
      "未踏Jr 応募 第一次選考落ち",
      "学内コンペティション アプリ開発部門「ZenClear」銅賞 / メンター特別賞受賞",
      "「puffer_discrd」リリース",
    ],
  },
  {
    year: "2025",
    entries: [
      "異能Vation 応募",
      "学内ビジネスコンテスト応募 第二次選考落ち",
      "全国動画クリエイト甲子園: 企業コラボ部門 佳作",
      "ボランティア「チルON!べ~す」の活動に参加",
      "N高グループ: 磁石際企画の制作",
      "N高グループ: 投資部 第七期 ADV生",
      "プロダクト開発 講義受講",
      "学内コンペティション Web開発部門 入賞",
      "ご当地ゆるスポーツアワード 応募",
    ],
  },
  {
    year: "2024",
    entries: [
      "プロジェクトN α全国発表通過",
      "流しそうめん同好会運営就任"
    ],
  },
  {
    year: "2023",
    entries: ["講師就任"],
  },
];

const quickFacts = [
  { label: "Birth", value: "2008.09.28" },
  { label: "Focus", value: "Product × Full-stack" },
  {
    label: "Interests",
    value: "・Programming\n・Music (Tempalay, PK shampoo etc...)\n・Game (Osu)",
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <Badge variant="secondary" className="w-fit">
        {label}
      </Badge>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.16),transparent_24%),linear-gradient(180deg,#f8f4eb_0%,#f4efe4_45%,#f8f7f3_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.2))]" />

      <header
        data-site-header
        className="sticky top-0 z-30 select-none border-b border-border/50 bg-background/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <HashScrollLink
              href="#top"
              className="inline-flex items-center text-lg font-semibold transition-colors hover:text-primary"
            >
              Portfolio
            </HashScrollLink>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <HashScrollLink
                key={item.href}
                href={item.href}
                className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </HashScrollLink>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="snap-start mx-auto max-w-7xl px-6 pb-18 pt-12 lg:px-10 lg:pb-24 lg:pt-18"
      >
        <div className="space-y-8">
          <div className="max-w-6xl space-y-6">
            <p className="max-w-2xl text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Full-stack Developer / Product Manager
            </p>
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_clamp(6.75rem,15vw,12rem)] sm:items-end sm:gap-8">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance sm:text-6xl lg:text-8xl">
                  Kotaro Hachiro
                  <span className="block text-primary">Portfolio</span>
                </h1>
                <div className="relative justify-self-start sm:justify-self-end">
                  <div className="absolute inset-[-10%] rounded-[2.4rem] bg-primary/12 blur-2xl" />
                  <div className="relative aspect-square w-[clamp(6.75rem,15vw,12rem)] overflow-hidden rounded-[2.2rem] border border-border/70 bg-background/80 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.48)]">
                    <Image
                      src="/kotarooo.png"
                      alt="kotarooo logo"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 108px, (max-width: 1024px) 15vw, 192px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                学習支援アプリからブラウザ拡張、コミュニティ向けサイトまで。
                フロントエンドの見た目と体験、バックエンドの接続、そしてプロダクトの輪郭まで横断して設計しています。
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <HashScrollLink href="#projects" className={buttonVariants({ size: "lg" })}>
              プロジェクトを見る
              <ArrowRight className="size-4" />
            </HashScrollLink>
            <a
              href="https://github.com/dog0928"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <Card key={fact.label} className="h-full bg-background/60">
                <CardHeader className="h-full justify-center gap-1 px-6 py-4">
                  <CardDescription className="uppercase tracking-[0.22em]">
                    {fact.label}
                  </CardDescription>
                  <CardTitle className="text-base leading-6 whitespace-pre-line">
                    {fact.value}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 snap-start snap-always mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24"
      >
        <SectionHeading
          label="Projects"
          title="制作物"
          description="高校に入ってから現在までに特に力を入れて取り組んだプロジェクトです。"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {highlightedProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 snap-start snap-always mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24"
      >
        <SectionHeading
          label="Skills"
          title="技術スタック"
          description="実務経験もあるものから、自宅サーバーの運用に用いているものまで書いています。"
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card key={group.title} className="bg-card/80">
                <CardHeader className="gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{group.title}</CardTitle>
                      <CardDescription>{group.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section
        id="milestones"
        className="scroll-mt-24 snap-start snap-always mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24"
      >
        <SectionHeading
          label="Milestones"
          title="マイルストーン"
          description="中学生時代の時から取り組んでいる、プログラミングやゲーム系の講師の経験から様々なコンテストへの応募を繰り返しています。"
        />

        <div className="mt-10 grid gap-5">
          {milestones.map((milestone) => (
            <Card key={milestone.year} className="overflow-hidden bg-background/72">
              <div className="grid gap-0 md:grid-cols-[180px_minmax(0,1fr)]">
                <div className="border-b border-border/60 bg-primary px-6 py-8 text-primary-foreground md:border-b-0 md:border-r">
                  <p className="mt-3 text-4xl font-semibold">{milestone.year}</p>
                </div>
                <div className="p-6 md:p-8">
                  <ul className="grid gap-3">
                    {milestone.entries.map((entry) => (
                      <li
                        key={entry}
                        className="rounded-2xl border border-border/60 bg-card/85 px-4 py-3 text-sm leading-6 text-foreground/85"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="snap-start mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
        <Card className="overflow-hidden border-none bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(25,64,79,0.94),rgba(14,116,144,0.88))] text-white shadow-[0_40px_100px_-30px_rgba(8,47,73,0.7)]">
          <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-white/65">
                Contact / Collaboration
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                お問い合わせ
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <p className="max-w-2xl leading-7 text-white/72">
                  <code>info@connelab.jp</code>
                </p>
                <CopyButton text="info@connelab.jp" label="メールをコピー" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/dog0928"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className:
                    "bg-white text-slate-950 hover:bg-white/90 hover:text-slate-950",
                })}
              >
                GitHubで見る
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="https://boostudy.app"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white",
                })}
              >
                Boostudyへ
                <FolderKanban className="size-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
