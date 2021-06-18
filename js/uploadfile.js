
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  // for (let i = 1; i <= 4; i++) { // сюда будем помещать drug-&-drop файлы (4)
  //   window['uploadDragFiles_'+i] = new Object();
  // }

  document.querySelectorAll('.upload-file__wrapper').forEach(function (current_item, index) {

    const inputFile = current_item.querySelector('.upload-file__input');

    // создаём массив файлов
    let fileList = [];

    /////////// Кнопка «Прикрепить файл» ///////////
    let textSelector = current_item.querySelector('.upload-file__text');

    // Событие выбора файла(ов)
    inputFile.addEventListener('change', function () {
      fileList.push(...inputFile.files);
      // console.log(inputFile.files);
      // вызов функции для каждого файла
      fileList.forEach(file => {
        uploadFile(file);
      });
    });

    // Проверяем размер файлов и выводим название
    const uploadFile = (file) => {

      // размер файла <5 Мб
      if (file.size > 5 * 1024 * 1024) {
        alert('Файл должен быть не более 5 МБ.');
        return;
      }

      // Показ загружаемых файлов
      if (file && fileList.length > 1) {
        if (fileList.length <= 4) {
          textSelector.textContent = `Выбрано ${fileList.length} файла`;
        } else {
          textSelector.textContent = `Выбрано ${fileList.length} файлов`;
        }
      } else {
        textSelector.textContent = file.name;
      }
      fileList = [];
    }
  })
  });


