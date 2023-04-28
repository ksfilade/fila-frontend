import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class SideBar extends Component {


    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }
    handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }
    handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }
   
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
                <nav>
                    <a onClick={this.closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Назад
                        </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Бела Техника
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                            
                                                <h5>Фрижидери</h5>
                                                <ul>
                                                    <li >
                                                        <Link to="/products/Фрижидери" >Фрижидери</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Комбинирани-Фрижидери">Комбинирани Фрижидери</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Замразнувачи</h5>
                                                <ul>
                                                
                                                    <li>
                                                        <Link to="/products/Вертикални-Замрзнувачи">Вертикални Замразнувачи</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Хоризонтални-Замрзнувачи">Хоризонтални Замразнувачи</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Шпорети</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Електрични-Шпорети">Електрични Шпорети</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Шпорети-со-Керамички-Плотни">Шпорети со Керамички Плотни</Link>
                                                    </li>      
                                                    <li>
                                                        <Link to="/products/Комбинирани-Шпорети">Комбинирани Шпорети</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Бојлери</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Бојлери-за-во-купатило">Бојлери за купатило</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Бојлери-за-во-Кујна">Бојлери за Кујна</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Мини Шпорети</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Мини-Шпорети">Мини Шпорети</Link>
                                                    </li>
                                                </ul> 
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Микробранови Печки</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Микробранови-Печки">Микробранови Печки</Link>
                                                    </li>
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Вградна Техника</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Вградни-Машини-за-Садови">Вградни Машини за Садови</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Вградни-Микробранови-Печки">Вградни Микробранови Печки</Link>
                                                    </li>        
                                                    <li>
                                                        <Link to="/products/Вградни-Плотни">Вградни Плотни</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Вградни-Фурни">Вградни Фурни</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Вградни-Комплети">Вградни Комплети</Link>
                                                    </li>                                      
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Машини за Перење и Сушење</h5>
                                                <ul>
                                                
                                                    <li>
                                                        <Link to="/products/Машини-за-Перење">Машини за Перење</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Машини-за-Сушење">Машини за Сушење</Link>
                                                    </li>                        
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Машини за Садови</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Машини-за-Садови">Машини за Садови</Link>
                                                    </li>
                                                </ul> 
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </li>
                            </ul>
                        </li><li>
                            <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Ладење и Греење
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Клима Уреди</h5>
                                                <ul>
                                              
                                                    <li>
                                                        <Link to="/products/Инвертер-Системи">Инвертер Системи</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Сплит-Систем">Сплит Системи</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Греење</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="/products/Калорифери">Калорифери</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Камини-на-дрва">Камини на дрва</Link>
                                                    </li>                          
                                                    <li>
                                                        <Link to="/products/Комбинирани-Котели">Комбинирани Котели</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Панелни-Греалки">Панелни Греалки</Link>
                                                    </li>                          
                                                    <li>
                                                        <Link to="/products/Печки-на-Пелет">Печки на Пелет</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Радијатори">Радијатори</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Шпорети">Шпорети</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>
                            </ul>
                        </li><li>
                            <Link to="/products" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Апарати за Домакинство
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Апарати за Домакинство</h5>
                                                <ul>
                                               
                                                    <li>
                                                        <Link to="/products/Правосмукалки">Правосмукалки</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Миксери-*-Мултипрактик">Миксери / Мултипрактик</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Фритези">Фритези</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Сецко">Сецко</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Блендери">Блендери</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Апарати-за-Печење">Апарати за Печење</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Електрични-Тави">Електрични Тави</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Решоа">Решоа</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>
                            </ul>
                        </li><li>
                            <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Телевизори
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>Телевизори</h5>
                                                <ul>
                                                
                                                    <li>
                                                        <Link to="/products/Телевизори">Телевизори</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Држачи-за-Телевизори">Држачи за Телевизори</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Кабли-и-Разделници">Кабли и Разделници</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Smart-tv-боксови">Smart tv боксови</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Антени">Антени</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Батерии">Батерии</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Далечински-управувачи">Далечински управувачи</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products/Нега-на-Екрани">Нега на Екрани</Link>
                                                    </li>                                                
                                                </ul> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>
                            </ul>
                        </li><li>
                            <Link to="/products/Велосипеди" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Велосипеди
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/products/Компјутери" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Компјутери
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/products/Телефони" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Телефони
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/Фотоапарати-и-Камери" onClick={(e) => this.handleMegaSubmenu(e)}>
                                Фотоапарати и Камери
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>

        )
    }
}

let category = ['Фрижидери','Комбинирани-Фрижидери','Вертикални-Замразнувачи','Хоризонтални-Замразнувачи','Електрични-Шпорети',
'Шпорети-со-Керамички-Плотни','Комбинирани-Шпорети','Бојлери-за-купатило','Бојлери-за-Кујна','Мини-Шпорети','Микробранови-Печки','Електрични-Шпорети',
'Вградни-Машини-за-Садови','Вградни-Микробранови-Печки','Вградни-Плотни','Вградни-Фурни','Вградни-Комплети','Машини-за-Перење','Машини-за-Сушење',
'Машини-за-Садови','Инвертер-Системи','Сплит-Систем','Калорифери','Камини-на-дрва','Комбинирани-Котели','Панелни-Греалки','Печки-на-Пелет','Радијатори'
,'Шпорети','Правосмукалки','Миксери-/-Мултипрактик','Фритези','Сецко','Блендери','Апарати-за-Печење','Електрични-Тави','Решоа',
'Решоа','Телевизори','Држачи-за-Телевизори','Кабли-и-Разделници','Smart-tv-боксови','Антени','Батерии','Далечински-управувачи'
,'Нега-на-Екрани','Велосипеди','Компјутери','Телефони','Фотоапарати-и-Камери']

export default SideBar;

