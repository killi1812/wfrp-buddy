package service

import "os"

type AppServ struct{}

func (srv *AppServ) ReadFile(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	return string(content), nil
}
