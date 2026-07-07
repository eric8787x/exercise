# exercise
健身库

## 站在巨人的肩膀上

这个项目使用了下面两个开源项目提供的能力：

- [JahelCuadrado/ExerciseGymGifsDB](https://github.com/JahelCuadrado/ExerciseGymGifsDB)：提供健身动作 GIF 资源。
- [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset)：提供动作数据、分类、器械、目标肌群和多语言说明。

## Web 页面展示
<img src="showcase/web-list.png" alt="动作列表"  />
<img src="showcase/web-detail.png" alt="动作详情"/>

## Web 项目运行

进入 Web 项目目录：

```bash
cd web
```

安装依赖：

```bash
npm install
```

本地启动：

```bash
npm run dev
```

启动后访问：

```text
http://127.0.0.1:5173/
```

构建生产版本：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```
