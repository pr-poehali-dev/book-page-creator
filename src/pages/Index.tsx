import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [fontSize, setFontSize] = useState([14]);
  const [lineHeight, setLineHeight] = useState([1.6]);
  const [margins, setMargins] = useState([20]);
  const [text, setText] = useState("");
  const [pageFormat, setPageFormat] = useState("A4");
  const [customWidth, setCustomWidth] = useState(210);
  const [customHeight, setCustomHeight] = useState(297);

  const getPageDimensions = () => {
    switch (pageFormat) {
      case "A4":
        return { width: 210, height: 297 };
      case "A5":
        return { width: 148, height: 210 };
      case "Letter":
        return { width: 216, height: 279 };
      case "Custom":
        return { width: customWidth, height: customHeight };
      default:
        return { width: 210, height: 297 };
    }
  };

  const pageDimensions = getPageDimensions();

  const sampleText = `Лорем ипсум долор сит амет, консететур адиписцинг элит, сед до еиусмод темпор инцидидунт ут лаборе ет долоре магна аликуа. Ут еним ад миним вениам, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Сед ут перспициатис унде омнис исте натус еррор сит волуптатем аццусантиум долоремкуе лаудантиум, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Book" size={24} className="text-primary" />
              <h1 className="text-2xl font-bold">PageMaker</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Загрузка
              </a>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Просмотр
              </a>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Настройки
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Превратите текст в книгу</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональное форматирование текста для печати и брошюровки.
            Поддержка всех популярных форматов файлов.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel - File Upload & Settings */}
          <div className="lg:col-span-4 space-y-6">
            {/* File Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Upload" size={20} />
                  Загрузка файла
                </CardTitle>
                <CardDescription>
                  Поддерживаются форматы: TXT, DOCX, PDF
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Icon
                    name="CloudUpload"
                    size={48}
                    className="mx-auto mb-4 text-muted-foreground"
                  />
                  <p className="text-sm text-muted-foreground mb-2">
                    Перетащите файл сюда или
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="FolderOpen" size={16} className="mr-2" />
                    Выберите файл
                  </Button>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="text-input">
                    Или введите текст напрямую:
                  </Label>
                  <Textarea
                    id="text-input"
                    placeholder="Введите ваш текст здесь..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  onClick={() => setText(sampleText)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Использовать пример текста
                </Button>
              </CardContent>
            </Card>

            {/* Format Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={20} />
                  Настройки форматирования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="page-format">Формат страницы</Label>
                  <Select value={pageFormat} onValueChange={setPageFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите формат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A4">A4 (210×297 мм)</SelectItem>
                      <SelectItem value="A5">A5 (148×210 мм)</SelectItem>
                      <SelectItem value="Letter">
                        Letter (216×279 мм)
                      </SelectItem>
                      <SelectItem value="Custom">Пользовательский</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {pageFormat === "Custom" && (
                  <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="custom-width">Ширина (мм)</Label>
                        <Input
                          id="custom-width"
                          type="number"
                          value={customWidth}
                          onChange={(e) =>
                            setCustomWidth(Number(e.target.value))
                          }
                          min="50"
                          max="500"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="custom-height">Высота (мм)</Label>
                        <Input
                          id="custom-height"
                          type="number"
                          value={customHeight}
                          onChange={(e) =>
                            setCustomHeight(Number(e.target.value))
                          }
                          min="50"
                          max="500"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Текущий размер: {customWidth}×{customHeight} мм
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="font-family">Шрифт</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите шрифт" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="merriweather">Merriweather</SelectItem>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="opensans">Open Sans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Размер шрифта: {fontSize[0]}pt</Label>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    max={24}
                    min={8}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Межстрочный интервал: {lineHeight[0]}</Label>
                  <Slider
                    value={lineHeight}
                    onValueChange={setLineHeight}
                    max={3}
                    min={1}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Поля: {margins[0]}мм</Label>
                  <Slider
                    value={margins}
                    onValueChange={setMargins}
                    max={50}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" size={20} />
                  Экспорт
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Скачать PDF
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Printer" size={16} className="mr-2" />
                  Печать
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить проект
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Eye" size={20} />
                  Предварительный просмотр
                </CardTitle>
                <CardDescription>
                  Так будут выглядеть ваши страницы при печати (
                  {pageDimensions.width}×{pageDimensions.height} мм)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="max-w-2xl mx-auto">
                    {/* Mock Page */}
                    <div
                      className="bg-white shadow-lg rounded-lg p-8 font-serif mx-auto"
                      style={{
                        fontSize: `${fontSize[0]}px`,
                        lineHeight: lineHeight[0],
                        padding: `${margins[0]}px`,
                        width: `${pageDimensions.width * 0.8}px`,
                        height: `${pageDimensions.height * 0.8}px`,
                        aspectRatio: `${pageDimensions.width}/${pageDimensions.height}`,
                        maxWidth: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                          Страница 1
                        </h3>
                        <div className="text-justify">{text || sampleText}</div>
                      </div>
                      <div className="mt-8 text-center text-sm text-muted-foreground">
                        — 1 —
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-6 space-x-4">
                    <Button variant="outline" size="sm">
                      <Icon name="ChevronLeft" size={16} className="mr-1" />
                      Предыдущая
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Страница 1 из 3
                    </span>
                    <Button variant="outline" size="sm">
                      Следующая
                      <Icon name="ChevronRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
